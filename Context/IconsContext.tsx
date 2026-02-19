'use client'
import { createContext, ReactNode, useEffect, useState } from "react";
import { CartItem } from "../Api/Cart/CartItems";
import { DisplayWishList } from "../Api/WishList/DisplayWishList";


type IconsContextType = {
    count: number | null
    countCart: number | null
    isLoading: boolean
    isLoadingCart: boolean
    UserData:string
    setUserData:(value:string)=>void
    setCount:(value:number|null)=> void
    setCountCart:(value:number|null)=> void
    
    handelCartItemIcon: () => Promise<void>
    handelDisplayWishListContext: () => Promise<void>




}


export let IconsContext = createContext<IconsContextType | null>(null)


export let IconsContextProvider = ({ children }: { children: ReactNode }) => {

    let [count, setCount] = useState<number|null>(null)
    let [isLoading, setIsLoading] = useState(false)
    let [UserData, setUserData] = useState('')
    
    let [countCart, setCountCart] = useState<number|null>(null)
    let [isLoadingCart, setIsLoadingCart] = useState(false)

    let handelCartItemIcon = async () => {

        try {
            setIsLoadingCart(true)
            let data = await CartItem()
            setCountCart(data?.numOfCartItems)

        } catch (error) {

        } finally {
            setIsLoadingCart(false)

        }




    }


    let handelDisplayWishListContext = async () => {
        try {

            setIsLoading(true)
            let data = await DisplayWishList()

            setCount(data?.count)

        } catch (error) {
            console.log(error);


        } finally {
            setIsLoading(false)
        }

    }


    useEffect(()=>{
        handelCartItemIcon()
        handelDisplayWishListContext()

    },[])


    return <IconsContext.Provider value={{ count,  countCart , UserData , setUserData  ,handelCartItemIcon, handelDisplayWishListContext , setCount , setCountCart ,  isLoading ,isLoadingCart}}>
        {children}
    </IconsContext.Provider>
}