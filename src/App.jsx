import "./App.css";
import CartSidebar from "./components/CartSidebar";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />

      <Products />

      <div className="overlay" id="overlay"></div>

      <CartSidebar />
    </>
  );
}

export default App;
