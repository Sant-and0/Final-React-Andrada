import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => { 
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const addItem = (item) => 
    setItems(prev => {
      const itemExists = prev.find(existingItem => existingItem.id === item.id);

      if (itemExists) {
        const updatedItems = prev.map(existingItem => 
          existingItem.id === item.id ? {...existingItem, quantity: existingItem.quantity + 1} : existingItem
        );

        return updatedItems;
      } else {
        return [...prev, {...item, quantity: 1}];
      }
    });

  console.log(items);

  return (
      <CartContext.Provider value={{ addItem, clear, items }}>
          {children}
      </CartContext.Provider>
  );
};