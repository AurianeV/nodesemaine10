// client/src/components/MeubleForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function MeubleForm() {
  const [nom, setNom] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/meubles/ajouter', { nom });
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
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default MeubleForm;
