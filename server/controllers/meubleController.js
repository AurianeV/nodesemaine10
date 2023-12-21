// server/controllers/meubleController.js
import Meuble from '../models/meuble.js';

export const getMeubles = async (req, res) => {
    try {
      console.log('Avant la requête à la base de données');
      const meubles = await Meuble.find();
      console.log('Après la requête à la base de données');
      res.json(meubles);
    } catch (error) {
      console.error('Erreur lors de la récupération des meubles dans le contrôleur :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des meubles' });
    }
  };

export const createMeuble = async (req, res) => {
  const { nom, materiaux, categorie, motsCles, quantite } = req.body;

  try {
    const newMeuble = await Meuble.create({ nom, materiaux, categorie, motsCles, quantite });
    res.status(201).json(newMeuble);
  } catch (error) {
    console.error('Erreur lors de l\'ajout du meuble :', error);
    res.status(500).json({ error: 'Erreur lors de l\'ajout du meuble' });
  }
};

// Ajoutez d'autres fonctions CRUD (updateMeuble, deleteMeuble) si nécessaire
