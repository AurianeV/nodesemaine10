// server/routes/meubles.js
import express from 'express';
import { getMeubles, createMeuble } from '../controllers/meubleController.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const meubles = await getMeubles(req, res);
      
    } catch (error) {
      console.error('Erreur lors de la récupération des meubles :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des meubles' });
    }
  });

router.post('/ajouter', async (req, res) => {
  try {
    const nouveauMeuble = await createMeuble(req, res);
    res.status(201).json(nouveauMeuble);
  } catch (error) {
    console.error('Erreur lors de l\'ajout du meuble :', error);
    res.status(500).json({ error: 'Erreur lors de l\'ajout du meuble' });
  }
});

export default router;
