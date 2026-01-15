import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useContext(CartContext);
  return (
    <div key={item.id} className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-info">
          <h4 className="cart-item-name">{item.name}</h4>
          <p className="cart-item-price">${item.price}</p>
        </div>
        <div className="cart-item-actions">
          <div className="cart-item-controls">
            <button
              onClick={() => updateQuantity(item.id, -1)}
              className="qty-btn"
            >
              −
            </button>
            <span className="quantity">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, +1)}
              className="qty-btn"
            >
              +
            </button>
          </div>
          <button onClick={() => removeItem(item.id)} className="remove-btn">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
