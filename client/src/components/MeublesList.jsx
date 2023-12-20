// client/src/components/MeublesList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MeublesList() {
  const [meubles, setMeubles] = useState([]);

  useEffect(() => {
    async function fetchMeubles() {
      const response = await axios.get('/meubles');
      setMeubles(response.data);
    }

    fetchMeubles();
  }, []);

  return (
    <div>
      <h2>Liste des Meubles</h2>
      <ul>
        {meubles.map(meuble => (
          <li key={meuble._id}>{meuble.nom}</li>
        ))}
      </ul>
    </div>
  );
}

export default MeublesList;
