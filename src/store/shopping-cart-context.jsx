import { createContext, useReducer } from "react";
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

function shoppingCartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );

      let updatedItems;

      if (existingItemIndex !== -1) {
        updatedItems = state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        const newProduct = products.find(
          (product) => product.id === action.payload,
        );
        updatedItems = [...state.items, { ...newProduct, quantity: 1 }];
      }

      return { ...state, items: updatedItems };

    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.delta }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [shoppingCart, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
    items: [],
    isOpen: false,
  });

  function addItem(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function updateQuantity(id, delta) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: { id, delta },
    });
  }

  function removeItem(id) {
    shoppingCartDispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }

  function toggleCart() {
    shoppingCartDispatch({
      type: "TOGGLE_CART",
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
