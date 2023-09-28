"use client"

import { useRouter } from "next/navigation";
import { createContext, useState, useContext } from "react";




interface CartProviderProps {
  children: ReactNode;
}

interface Product {
  id: number;
  price: number;
}

interface CartContextValue {
  isItemAdded: boolean;
  getCart: () => Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  isItemAddedToCart: (product: Product) => void;
  cartCount: () => number;
  cartTotal: () => number;
  clearCart: () => void;
}

const Context = createContext<CartContextValue | undefined>(undefined);

const Provider = ({ children }: CartProviderProps) => {
  const router = useRouter()

  const [isItemAdded, setIsItemAdded] = useState(false)

  const getCart = () => {
    let cart = []
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
    }
    return cart
  }

  const addToCart = (product) => {
    let cart = []
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
    }
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    isItemAddedToCart(product)
    router.refresh()
  }

  const removeFromCart = (product) => {
    let cart = []
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
    }
    cart = cart.filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(cart));
    isItemAddedToCart(product)
    router.refresh()
  }

  const isItemAddedToCart = (product) => {
    let cart = []
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
    }
    cart = cart.filter(item => item.id === product.id);

    if (cart.length > 0) {
      setIsItemAdded(true)
      return
    }

    setIsItemAdded(false)
  }

  const cartCount = () => {
    let cart = []
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
    }
    return cart.length
  }

  const cartTotal = () => {
    let total = 0
    let cart = []
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
    }
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      total += element.price
    }

    return total
  }

  const clearCart = () => {
    localStorage.removeItem('cart')
    router.refresh()
  }

  const exposed: CartContextValue = {
  isItemAdded,
  getCart,
  addToCart,
  removeFromCart,
  isItemAddedToCart,
  cartCount,
  cartTotal,
  clearCart
};

  return <Context.Provider value={exposed}>{children}</Context.Provider>
};

export const useCart = (): CartContextValue => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default Provider;