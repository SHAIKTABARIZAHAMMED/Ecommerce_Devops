import { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <div>
      <h1>Tej DevOps</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
