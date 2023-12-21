// server/index.js
import express from 'express';
import cors from 'cors';
import path from 'path'; // Ajoutez cette ligne pour gérer les chemins de fichiers
import './config/database.js';
import meubleRoutes from './routes/meubles.js';
import { fileURLToPath } from 'url'; // Ajoutez cette ligne pour obtenir le chemin du fichier


const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Utilisez fileURLToPath pour obtenir le chemin du fichier
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ajoutez cette configuration pour utiliser Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/meubles', meubleRoutes);

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
