// server/index.js
import express from 'express';
import { connect, connection } from 'mongoose';
import { json } from 'body-parser';
import cors from 'cors';
import meubleRoutes from './routes/meubles';

const app = express();
const port = 3001;

app.use(cors());
app.use(json());

app.use('/meubles', meubleRoutes);

connect('mongodb://localhost:27017/mon_projet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connexion réussie à MongoDB !');
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
