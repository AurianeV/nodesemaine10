// server/routes/materiaux.js
import express from 'express';
import { getMateriauDetails } from '../controllers/materiauController.js';

const router = express.Router();

router.get('/:materiauId', getMateriauDetails);

export default router;
