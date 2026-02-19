'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { Cart } from "../Types/Cart";
import { CartItem } from "../Api/Cart/CartItems";

type CartItemsContextType = {
  items: Cart | null,
  setItems: (value: Cart | null) => void,
  handelCartItem: () => {}


}
export let CartItemsContext = createContext<CartItemsContextType | null>(null)

export let CartItemsContextProvider = ({ children }: { children: React.ReactNode }) => {
  let [items, setItems] = useState<Cart | null>(null)

  let handelCartItem = async () => {
    let data = await CartItem()
    setItems(data)


  }

  useEffect(() => {
    handelCartItem()
  }, [])



  return <CartItemsContext.Provider value={{ items, setItems, handelCartItem }}>

    {children}
  </CartItemsContext.Provider>

} 