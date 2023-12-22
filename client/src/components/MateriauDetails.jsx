// client/src/components/MateriauDetails.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MateriauDetails({ match }) {
  const { params: { materiauId } } = match;
  const [materiau, setMateriau] = useState(null);

  useEffect(() => {
    async function fetchMateriauDetails() {
      try {
        const response = await axios.get(`http://localhost:3001/materiaux/${materiauId}`);
        setMateriau(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du matériau :', error);
      }
    }

    fetchMateriauDetails();
  }, [materiauId]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Détails du Matériau</h2>
      {materiau ? (
        <div>
          <p>Nom: {materiau.nom}</p>
          <p>Entreprise: {materiau.entreprise}</p>
        </div>
      ) : (
        <p>Chargement des détails...</p>
      )}
    </div>
  );
}

export default MateriauDetails;
