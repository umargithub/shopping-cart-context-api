import { createContext, useState } from "react";
import { products } from "../data/produtcs";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  // removeItem: () => {},
  // updateQunatity: () => {},
  // toggleCart: () => {},
});

export function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  console.log(shoppingCart);

  function addItem(id) {
    setShoppingCart((prevShoppingCart) => {
      // Check if item already exists
      const existingItemIndex = prevShoppingCart.items.findIndex(
        (item) => item.id === id
      );

      let updatedItems;

      if (existingItemIndex !== -1) {
        // Item exists - update quantity
        console.log("existing item");
        updatedItems = prevShoppingCart.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Item doesn't exist - add new item
        console.log("NEW item");
        const newProduct = products.find((product) => product.id === id);
        updatedItems = [
          ...prevShoppingCart.items,
          { ...newProduct, quantity: 1 },
        ];
      }

      return { ...prevShoppingCart, items: updatedItems };
    });
  }

  const contextValue = {
    items: shoppingCart.items,
    addItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
