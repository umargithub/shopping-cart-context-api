import "./App.css";
import CartSidebar from "./components/CartSidebar";
import Header from "./components/Header";
import Products from "./components/Products";
import { CartContextProvider } from "./store/shopping-cart-context";

function App() {
  return (
    <CartContextProvider>
      <Header />

      <Products />

      <CartSidebar />
    </CartContextProvider>
  );
}

export default App;
