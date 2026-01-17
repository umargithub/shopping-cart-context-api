# Shopping Cart with Context API + useReducer

Refactored version using useReducer for better state management.

## Why useReducer?

- Centralized state logic in reducer function
- Cleaner component code
- Easier to test state transitions
- Better for complex state with multiple actions

## Branch Comparison

- `main`: Original implementation with useState
- `feature/add-useReducer`: Refactored with useReducer

## Actions

- ADD_ITEM: Add or increment item quantity
- UPDATE_ITEM: Update quantity with delta
- REMOVE_ITEM: Remove item from cart
- TOGGLE_CART: Open/close cart sidebar
