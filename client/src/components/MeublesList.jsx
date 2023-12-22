// client/src/components/MeublesList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

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
    <div className="container mt-4">
      <h2 className="mb-4">Liste des Meubles</h2>
      <ul className="list-group">
        {Array.isArray(meubles) ? (
          meubles.map((meuble) => (
            <li key={meuble._id} className="list-group-item">
              <h3 className="mb-1">Nom du Meuble: {meuble.nom}</h3>
              <p className="mb-1">Catégorie du Meuble: {meuble.categorie}</p>
              {Array.isArray(meuble.materiaux) && (
                <p className="mb-1">Matériaux du Meuble:
                  {meuble.materiaux.map((matiere, index) => (
                    <Link key={index} to={`/materiaux/${matiere._id}`}>
                    <span key={index}>{matiere.nom}</span>
                    </Link>
                  ))}
                </p>
              )}
              <p className="mb-1">Mots-clés du Meuble: {meuble.motsCles.join(', ')}</p>
            </li>
          ))
        ) : (
          <li className="list-group-item">Aucun meuble trouvé</li>
        )}
      </ul>
    </div>
  );
}

export default MeublesList;
