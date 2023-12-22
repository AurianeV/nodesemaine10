// server/controllers/meubleController.js
import Meuble from '../models/meuble.js';
import Materiau from '../models/materiau.js'

export const getMeubles = async (req, res) => {
    try {
        const meubles = await Meuble.find().populate('materiaux');
        res.json(meubles);
    } catch (error) {
        console.error('Erreur lors de la récupération des meubles dans le contrôleur :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des meubles' });
    }
};
  
  export const createMeuble = async (req, res) => {
    const { nom, materiaux, categorie, motsCles, quantite } = req.body;
  
    try {
      const materiauxIds = await Promise.all(
        materiaux.map(async (materiau) => {
          let existingMateriau = await Materiau.findOne({ nom: materiau.nom });
  
          if (!existingMateriau) {
            existingMateriau = await Materiau.create(materiau);
          }
  
          return existingMateriau._id;
        })
      );
  
      const newMeuble = await Meuble.create({ nom, materiaux: materiauxIds, categorie, motsCles, quantite });
      res.status(201).json(newMeuble);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du meuble :', error);
      res.status(500).json({ error: 'Erreur lors de l\'ajout du meuble' });
    }
  };