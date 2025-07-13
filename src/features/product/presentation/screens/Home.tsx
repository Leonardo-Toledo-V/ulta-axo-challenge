import { useEffect, useState } from 'react';
import { useProduct } from '../controllers/useProduct';

function App() {
  const { products, isLoading, error, getAllProducts, getProductsByType } = useProduct();

  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    if (!filtered) {
      getAllProducts();
    }
  }, [filtered]);

  const handleFilter = async () => {
    setFiltered(true);
    try {
      await getProductsByType({ product_type: "foundation" });
    } catch (e) {
      console.error("Error cargando productos filtrados", e);
    }
  };

  return (
    <div>
      <h1>Productos</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleFilter}
        disabled={isLoading}
      >
        Mostrar Maybelline Lipsticks
      </button>

      {isLoading && <p>Cargando productos...</p>}

      {error && (
        <div>
          <p>Error: {error.message}</p>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}

      <ul className="list-none p-0">
        {products.slice(0, 50).map((product) => (
          <li key={product.id} className="mb-4">
            <div className="border border-gray-300 rounded-lg p-4 flex items-center gap-4 max-w-md">
              <img
                src={product.image_link ?? undefined}
                alt={product.name ?? "Producto"}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-600">{product.brand}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
