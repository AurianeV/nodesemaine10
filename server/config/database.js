// server/config/database.js
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/boutique_artisan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connexion réussie à MongoDB !');
});
