import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: string;
  slug?: string;
  name: string;
  price: string | number;
  quantity: number;
  image: string;
  description: string;
  featured?: boolean;
  series?: string;
  format?: string;
  style?: string;
  status?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => Promise<void>;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const parsePrice = (price: string | number): number => {
  if (typeof price === "number") return price;
  return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = async (newItem: Omit<CartItem, "quantity">) => {
    try {
      setItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === newItem.id);

        if (existingItem) {
          return prevItems.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }

        return [...prevItems, { ...newItem, quantity: 1 }];
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
      throw error;
    }
  };

  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      return total + parsePrice(item.price) * item.quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    return {
      items: [],
      addToCart: async () => {},
      removeFromCart: () => {},
      updateQuantity: () => {},
      clearCart: () => {},
      getTotalPrice: () => 0,
      getTotalItems: () => 0,
    };
  }

  return context;
};