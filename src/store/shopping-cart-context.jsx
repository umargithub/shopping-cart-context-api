import { createContext, useState } from "react";
import { products } from "../data/produtcs";

export const CartContext = createContext({
  items: [],
  isOpen: false,
  addItem: () => {},
  removeItem: () => {},
  updateQunatity: () => {},
  toggleCart: () => {},
  totalAmount: 0,
  totalItems: 0,
});

export function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
    isOpen: false,
  });

  function addItem(id) {
    setShoppingCart((prevShoppingCart) => {
      const existingItemIndex = prevShoppingCart.items.findIndex(
        (item) => item.id === id
      );

      let updatedItems;

      if (existingItemIndex !== -1) {
        updatedItems = prevShoppingCart.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const newProduct = products.find((product) => product.id === id);
        updatedItems = [
          ...prevShoppingCart.items,
          { ...newProduct, quantity: 1 },
        ];
      }

      return { ...prevShoppingCart, items: updatedItems };
    });
  }

  function updateQuantity(id, delta) {
    setShoppingCart((prevShoppingCart) => ({
      ...prevShoppingCart,
      items: prevShoppingCart.items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0),
    }));
  }

  function removeItem(id) {
    setShoppingCart((prevShoppingCart) => {
      return {
        ...prevShoppingCart,
        items: prevShoppingCart.items.filter((item) => item.id !== id),
      };
    });
  }

  function toggleCart() {
    setShoppingCart((prevShoppingCart) => {
      return { ...prevShoppingCart, isOpen: !prevShoppingCart.isOpen };
    });
  }

  let totalAmount = shoppingCart.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  let totalItems = shoppingCart.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const contextValue = {
    items: shoppingCart.items,
    isOpen: shoppingCart.isOpen,
    addItem,
    updateQuantity,
    removeItem,
    toggleCart,
    totalAmount,
    totalItems,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
