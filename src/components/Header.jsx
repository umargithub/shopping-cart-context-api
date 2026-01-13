export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">🛒 TechStore</div>
          <button className="cart-button" id="cartBtn">
            Cart <span className="cart-count">0</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
