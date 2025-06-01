import React, { useState } from "react";
import EmbedDashboard from "./EmbedDashboard";
import PowerApp from "./PowerApp";
import "./MyProducts.css";

const products = [
  {
    id: 1,
    name: "Embeding PowerBI in Website",
    description:
      "Simple product build with HTML, CSS, Javascripts and ReactJS framework about my personal report embeding in website",
  },
  {
    id: 2,
    name: "Website Airline Manageer App by Power App and Dataverse",
    description:
      "App use to manage Flight, Ticket, Customer buit with low-code",
  },
];

function MyProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    if (selectedProduct.id === 2) {
      return <PowerApp product={selectedProduct} onBack={handleBack} />;
    } else {
      return <EmbedDashboard product={selectedProduct} onBack={handleBack} />;
    }
  }

  return (
    <div>
      <h1>SOME PRODUCTS</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="product-item"
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>

      <footer className="footer">
        <p>Phone Number: 0347743943</p>
        <p>Email: ntbichhao.work@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/h%E1%BA%A3o-b%C3%ADch-40b403294/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BichHao
          </a>
        </p>
      </footer>
    </div>
  );
}

export default MyProducts;
