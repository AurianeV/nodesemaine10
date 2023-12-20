// server/routes/meubles.js
import { Router } from 'express';
const router = Router();
import Meuble from '../models/meuble';

// Ajouter un meuble
router.post('/ajouter', async (req, res) => {
  try {
    const nouveauMeuble = await Meuble.create(req.body);
    res.status(201).json(nouveauMeuble);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'ajout du meuble.' });
  }
});

// Obtenir la liste de tous les meubles
router.get('/', async (req, res) => {
  try {
    const meubles = await Meuble.find();
    res.status(200).json(meubles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des meubles.' });
  }
});

export default router;
