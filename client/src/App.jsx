// client/src/App.jsx
import React from 'react';
import MeublesList from './components/MeublesList';
import MeubleForm from './components/MeubleForm';

function App() {
  return (
    <div>
      <MeublesList />
      <MeubleForm />
    </div>
  );
}

export default App;

