import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function CartSidebar() {
  const { isOpen, items, updateQuantity, removeItem, toggleCart, totalAmount } =
    useContext(CartContext);
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
          {items.length > 0 &&
            items.map((item) => {
              return (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
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
                      <button
                        onClick={() => removeItem(item.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

          {!items.length && (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          )}
        </div>

        {totalAmount > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span id="cartTotal">${totalAmount}</span>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}
