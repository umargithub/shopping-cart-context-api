export default function CartSidebar() {
  return (
    <div className="cart-sidebar" id="cartSidebar">
      <div className="cart-header">
        <h2 className="cart-title">Shopping Cart</h2>
        <button className="close-cart" id="closeCart">
          ✕
        </button>
      </div>

      <div className="cart-items" id="cartItems">
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <span>Total:</span>
          <span id="cartTotal">$0</span>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}
