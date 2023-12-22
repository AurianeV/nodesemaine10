// client/src/components/MeubleForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function MeubleForm() {
  const [nom, setNom] = useState('');
  const [materiaux, setMateriaux] = useState([]); 
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

  const ajouterMateriau = () => {
    const nouveauMateriau = { nom: '', entreprise: '' }; 
    setMateriaux([...materiaux, nouveauMateriau]);
  };

  const mettreAJourMateriau = (index, prop, valeur) => {
    const nouveauxMateriaux = [...materiaux];
    nouveauxMateriaux[index][prop] = valeur;
    setMateriaux(nouveauxMateriaux);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Ajouter un Meuble</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom du Meuble:</label>
          <input
            type="text"
            className="form-control"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categorie" className="form-label">Catégorie du Meuble:</label>
          <select
            className="form-select"
            id="categorie"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          >
            <option value="Armoire">Armoire</option>
            <option value="Etagère">Etagère</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="materiaux" className="form-label">Matériaux du Meuble:</label>
          {materiaux.map((materiau, index) => (
            <div key={index} className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder={`Matériau ${index + 1}`}
                value={materiau.nom}
                onChange={(e) => mettreAJourMateriau(index, 'nom', e.target.value)}
              />
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={ajouterMateriau}>
            Ajouter un matériau
          </button>
        </div>
        <div className="mb-3">
          <label htmlFor="motsCles" className="form-label">Mots-clés du Meuble:</label>
          <input
            type="text"
            className="form-control"
            id="motsCles"
            value={motsCles}
            onChange={(e) => setMotsCles(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default MeubleForm;
