// models/meuble.js
import mongoose from 'mongoose';

const meubleSchema = new mongoose.Schema({
    nom: String,
    categorie: String,
    materiaux: [String],
    motsCles: [String],
    quantite: { type: Number, default: 1 },
});

const Meuble = mongoose.model('Meuble', meubleSchema);

export default Meuble;
