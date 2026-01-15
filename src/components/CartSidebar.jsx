import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import EmptyCart from "./EmptyCart";
import CartFooter from "./CartFooter";
import CartItem from "./CartItem";

export default function CartSidebar() {
  const { isOpen, items, toggleCart, totalAmount } = useContext(CartContext);
  return (
    <>
      {isOpen && (
        <div className="overlay active" id="overlay" onClick={toggleCart}></div>
      )}
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`} id="cartSidebar">
        <div className="cart-header">
          <h2 className="cart-title">Shopping Cart</h2>
          <button onClick={toggleCart} className="close-cart" id="closeCart">
            ✕
          </button>
        </div>

        <div className="cart-items" id="cartItems">
          {items.length > 0 ? (
            items.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <EmptyCart />
          )}
        </div>

        <CartFooter totalAmount={totalAmount} />
      </div>
    </>
  );
}
