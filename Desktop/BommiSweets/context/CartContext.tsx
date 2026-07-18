"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/components/products/ProductData";

export interface CartItem {
  id: string; // unique combination of product.id + unitSize (e.g. "dodhal_500g")
  product: Product;
  quantity: number;
  unitSize: string;
  selected: boolean; // whether this item is checked/selected for ordering
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number, unitSize: string) => void;
  removeFromCart: (productId: string, unitSize: string) => void;
  updateQuantity: (
    productId: string,
    unitSize: string,
    quantity: number,
  ) => void;
  updateUnitSize: (
    productId: string,
    oldUnitSize: string,
    newUnitSize: string,
  ) => void;
  toggleSelectItem: (productId: string, unitSize: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const parseGrams = (option: string | undefined | null) => {
  const normalized = (option || "").toString().toLowerCase().replace(/\s+/g, "");
  
  let totalGrams = 0;
  
  // Extract kg part (e.g. "1kg" or "1.5kg")
  const kgMatch = normalized.match(/([\d.]+)kg/);
  if (kgMatch) {
    totalGrams += parseFloat(kgMatch[1]) * 1000;
  }
  
  // Remove the kg part before extracting grams to avoid matching the 'g' in 'kg'
  const withoutKg = normalized.replace(/[\d.]+kg/, '');
  
  // Extract g part (e.g. "250g")
  const gMatch = withoutKg.match(/([\d.]+)g/);
  if (gMatch) {
    totalGrams += parseFloat(gMatch[1]);
  }
  
  return totalGrams;
};

export const getMultiplier = (product: Product, option: string): number => {
  if (product.unit.includes("piece")) {
    const piecesMatch = product.unit.match(/\d+/);
    const pieces = piecesMatch ? parseInt(piecesMatch[0], 10) : 1;
    return 1 / pieces;
  }

  const baseGrams = parseGrams(product.unit);
  const selectedGrams = parseGrams(option);
  if (baseGrams <= 0 || selectedGrams <= 0) {
    return 1;
  }
  return selectedGrams / baseGrams;
};

export const getUnitOptions = (product: Product): string[] => {
  if (product.unit.includes("piece")) {
    return [product.unit];
  }

  if (product.unit === "250 g") {
    return ["250 g", "500g", "750g", "1 kg", "1.5 kg", "2 kg", "2.5 kg", "5 kg"];
  }

  return ["500g", "750g", "1 kg", "1.5 kg", "2 kg", "2.5 kg", "5 kg"];
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("bommi_sweets_cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem("bommi_sweets_cart", JSON.stringify(cartItems));
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
      }
    }
  }, [cartItems, isInitialized]);

  const addToCart = (product: Product, quantity: number, unitSize: string) => {
    const id = `${product.id}_${unitSize}`;
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === id);
      if (existingItemIndex > -1) {
        // Increment quantity of existing item
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        newItems[existingItemIndex].selected = true; // Auto-select when re-added
        return newItems;
      } else {
        // Add new item (selected by default)
        return [
          ...prevItems,
          { id, product, quantity, unitSize, selected: true },
        ];
      }
    });
    // REMOVED auto-open drawer: let users add again uninterrupted!
  };

  const removeFromCart = (productId: string, unitSize: string) => {
    const id = `${productId}_${unitSize}`;
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (
    productId: string,
    unitSize: string,
    quantity: number,
  ) => {
    const id = `${productId}_${unitSize}`;
    if (quantity <= 0) {
      removeFromCart(productId, unitSize);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const updateUnitSize = (
    productId: string,
    oldUnitSize: string,
    newUnitSize: string,
  ) => {
    const oldId = `${productId}_${oldUnitSize}`;
    const newId = `${productId}_${newUnitSize}`;

    setCartItems((prevItems) => {
      const oldItem = prevItems.find((item) => item.id === oldId);
      if (!oldItem) return prevItems;

      const existingNewItemIndex = prevItems.findIndex(
        (item) => item.id === newId,
      );

      if (existingNewItemIndex > -1) {
        // If the new size already exists, merge them!
        const newItems = prevItems.filter((item) => item.id !== oldId);
        newItems[existingNewItemIndex].quantity += oldItem.quantity;
        return newItems;
      } else {
        // Otherwise, update the item size and its custom ID
        return prevItems.map((item) =>
          item.id === oldId
            ? { ...item, id: newId, unitSize: newUnitSize }
            : item,
        );
      }
    });
  };

  const toggleSelectItem = (productId: string, unitSize: string) => {
    const id = `${productId}_${unitSize}`;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Derive cart Count and Total
  const cartCount = cartItems.length;

  const cartTotal = cartItems.reduce((total, item) => {
    if (!item.selected) return total; // Only count checked items!
    const basePrice = item.product.price;
    const multiplier = getMultiplier(item.product, item.unitSize);
    const itemPrice = basePrice * multiplier;
    return total + itemPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateUnitSize,
        toggleSelectItem,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
