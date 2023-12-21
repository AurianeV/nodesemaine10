// client/src/components/MeublesList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MeublesList() {
  const [meubles, setMeubles] = useState([]);

  useEffect(() => {
    async function fetchMeubles() {
      try {
        const response = await axios.get('http://localhost:3001/meubles');
        setMeubles(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des meubles :', error);
      }
    }

    fetchMeubles();
  }, []);

  return (
    <div>
      <h2>Liste des Meubles</h2>
      <ul>
        {Array.isArray(meubles) ? (
          meubles.map((meuble) => (
            <li key={meuble._id}>
              <h3>Nom du Meuble: {meuble.nom}</h3>
              <p>Catégorie du Meuble: {meuble.categorie}</p>
              {Array.isArray(meuble.materiaux) && (
                <p>Matériaux du Meuble: {meuble.materiaux.join(', ')}</p>
              )}
              <p>Mots-clés du Meuble: {meuble.motsCles.join(', ')}</p>
            </li>
          ))
        ) : (
          <li>Aucun meuble trouvé</li>
        )}
      </ul>
    </div>
  );
}

export default MeublesList;
