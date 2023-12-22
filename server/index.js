// server/index.js
import express from 'express';
import cors from 'cors';
import path from 'path'; 
import './config/database.js';
import meubleRoutes from './routes/meubles.js';
import { fileURLToPath } from 'url'; 
import authRoutes from './routes/auth.js'


const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/meubles', meubleRoutes);
app.use('/auth', authRoutes); 

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
