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
        {/* When cart has items - show this */}
        <div className="cart-item">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
            alt="MacBook Pro"
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <div className="cart-item-info">
              <h4 className="cart-item-name">MacBook Pro 16</h4>
              <p className="cart-item-price">$2,499</p>
            </div>
            <div className="cart-item-actions">
              <div className="cart-item-controls">
                <button className="qty-btn">−</button>
                <span className="quantity">2</span>
                <button className="qty-btn">+</button>
              </div>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        </div>

        <div className="cart-item">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
            alt="iPhone"
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <div className="cart-item-info">
              <h4 className="cart-item-name">iPhone 15 Pro</h4>
              <p className="cart-item-price">$999</p>
            </div>
            <div className="cart-item-actions">
              <div className="cart-item-controls">
                <button className="qty-btn">−</button>
                <span className="quantity">1</span>
                <button className="qty-btn">+</button>
              </div>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        </div>

        <div className="cart-item">
          <img
            src="https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500"
            alt="AirPods"
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <div className="cart-item-info">
              <h4 className="cart-item-name">AirPods Pro</h4>
              <p className="cart-item-price">$249</p>
            </div>
            <div className="cart-item-actions">
              <div className="cart-item-controls">
                <button className="qty-btn">−</button>
                <span className="quantity">1</span>
                <button className="qty-btn">+</button>
              </div>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        </div>

        {/* When cart is empty - show this instead */}
        {/* <div className="empty-cart">
          <p>Your cart is empty</p>
        </div> */}
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <span>Total:</span>
          <span id="cartTotal">$5,747</span>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}
