import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function Header() {
  const { toggleCart, totalItems } = useContext(CartContext);
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">🛒 TechStore</div>
          <button onClick={toggleCart} className="cart-button" id="cartBtn">
            Cart <span className="cart-count">{totalItems}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
