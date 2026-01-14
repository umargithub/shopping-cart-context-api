import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function Product({ product }) {
  const { addItem } = useContext(CartContext);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button
            onClick={() => addItem(product.id)}
            className="add-to-cart-btn"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
