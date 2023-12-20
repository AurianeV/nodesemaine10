// server/models/meuble.js
import { Schema, model } from 'mongoose';

const meubleSchema = new Schema({
  nom: String,
  materiaux: [{ type: Schema.Types.ObjectId, ref: 'Materiau' }],
});

const Meuble = model('Meuble', meubleSchema);

export default Meuble;
