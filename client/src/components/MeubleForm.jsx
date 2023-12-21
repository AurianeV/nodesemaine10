// client/src/components/MeubleForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function MeubleForm() {
  const [nom, setNom] = useState('');
  const [materiaux, setMateriaux] = useState('');
  const [categorie, setCategorie] = useState('');
  const [motsCles, setMotsCles] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/meubles/ajouter', { nom, materiaux, categorie, motsCles });
      alert('Meuble ajouté avec succès !');
    } catch (error) {
      console.error(error);
      alert('Erreur lors de l\'ajout du meuble.');
    }
  };

  return (
    <div>
      <h2>Ajouter un Meuble</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom du Meuble:</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <label>Catégorie du Meuble:</label>
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
        >
          <option value="Armoire">Armoire</option>
          <option value="Etagère">Etagère</option>
        </select>
        <label>Matériaux du Meuble:</label>
        <input
          type="text"
          value={materiaux}
          onChange={(e) => setMateriaux(e.target.value.split(','))}
        />
        <label>Mots-clés du Meuble:</label>
        <input
          type="text"
          value={motsCles}
          onChange={(e) => setMotsCles(e.target.value.split(','))}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default MeubleForm;
