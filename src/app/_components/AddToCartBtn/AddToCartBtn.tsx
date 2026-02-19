'use client'
import { Button } from '@/components/ui/button'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { CartItemsContext } from '../../../../Context/CartItemsContext'
import { AddToCartBtnApi } from '../../../../Api/Cart/AddToCart'
import { IconsContext } from '../../../../Context/IconsContext'
import { useRouter } from 'next/navigation'

export default function AddToCartBtn({ id }: { id: string }) {

  let router = useRouter()

  let [isloadin, setIsloading] = useState(false)
  let cart = useContext(CartItemsContext)
  if (!cart) { return null }
  let { handelCartItem } = cart

  let addCart = useContext(IconsContext)
  if (!addCart) { return null }
  let { handelCartItemIcon } = addCart


  let handelAddToCart = async () => {

    try {

      setIsloading(true)
      if (localStorage.getItem('userToken')) {

        let data = await AddToCartBtnApi(id)
        toast.success('Added to cart! 🛒')
        handelCartItemIcon()
        handelCartItem()


      } else {
        alert("You must sign in first to add items to your cart.");
        router.push("/Login");
      }






    } catch (error) {
      toast.error('Network issue')


    }
    finally {
      setIsloading(false)
    }


  }
  return <>


    <Button onClick={() => {

      handelAddToCart()


    }} className="w-full my-4 bg-lime-400 hover:bg-lime-500 cursor-pointer group flex items-center justify-center gap-2">
      {isloadin ? <i className="fa-solid fa-spinner fa-spin"></i> : <>
        Add to Cart
        <span className="transition-transform duration-300 group-hover:animate-bounce">
          <i className="fa-solid fa-cart-shopping"></i>
        </span>
      </>}

    </Button>

  </>
}
