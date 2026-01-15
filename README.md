# React Shopping Cart with Context API

A modern e-commerce shopping cart implementation built with React and Context API, featuring a clean UI and smooth user experience.

## Features

- **Add to Cart**: Add products with automatic quantity management
- **Update Quantity**: Increment/decrement item quantities with delta-based updates
- **Remove Items**: Delete items or auto-remove when quantity reaches zero
- **Real-time Totals**: Dynamic calculation of cart total and item count
- **Sliding Cart Sidebar**: Smooth slide-in cart with overlay
- **Responsive Design**: Clean, modern UI that works on all devices

## Tech Stack

- React 18
- Context API for state management
- CSS3 for styling
- Vite (or Create React App)

## Project Structure
```
src/
├── components/
│   ├── Header.jsx          # Navigation with cart button
│   ├── Products.jsx        # Product grid display
│   ├── Product.jsx         # Individual product card
│   └── CartSidebar.jsx     # Shopping cart sidebar
├── store/
│   └── shopping-cart-context.jsx  # Context API implementation
├── data/
│   └── products.js         # Product data
└── App.jsx                 # Main app component
```

## Key Implementation Details

### Context API Structure
```javascript
{
  items: [],           // Cart items array
  isOpen: false,       // Cart sidebar state
  totalAmount: 0,      // Computed total price
  totalItems: 0,       // Computed item count
  addItem,             // Add or increment item
  removeItem,          // Remove item from cart
  updateQuantity,      // Update quantity by delta
  toggleCart           // Toggle cart visibility
}
```

### Smart Quantity Management
Uses delta-based updates with automatic cleanup:
```javascript
updateQuantity(itemId, -1)  // Decrement
updateQuantity(itemId, 1)   // Increment
// Auto-removes when quantity reaches 0
```

## Getting Started

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## What I Learned

- Context API for global state management
- Immutable state updates in React
- Delta-based quantity updates pattern
- Computed values from state
- Conditional rendering patterns
- Component composition and separation of concerns
