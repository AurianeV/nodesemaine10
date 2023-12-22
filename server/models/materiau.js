// models/materiau.js
import { Schema, model } from 'mongoose';

const materiauSchema = new Schema({
  nom: String,
  entreprise: String,
});

const Materiau = model('Materiau', materiauSchema);

export default Materiau;
