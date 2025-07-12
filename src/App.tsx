// src/App.tsx o src/App.jsx

import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error al obtener los datos:', err));
  }, []);

  return (
    <div>
      <h1>Datos desde API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
