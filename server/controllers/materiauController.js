// server/controllers/materiauController.js
import Materiau from '../models/materiau.js';

export const getMateriauDetails = async (req, res) => {
  const { materiauId } = req.params;

  try {
    const materiau = await Materiau.findById(materiauId);
    res.json(materiau);
  } catch (error) {
    console.error('Erreur lors de la récupération des détails du matériau :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des détails du matériau' });
  }
};
