import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function CartFooter() {
  const { totalAmount } = useContext(CartContext);
  if (totalAmount === 0) return null;
  return (
    <div className="cart-footer">
      <div className="cart-total">
        <span>Total:</span>
        <span id="cartTotal">${totalAmount}</span>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
}
