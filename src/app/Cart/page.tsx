'use client'

import { useContext, useEffect, useState } from "react"
import { CartItemsContext } from "../../../Context/CartItemsContext"
import { it } from "node:test"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { DeleteCartItem } from "../../../Api/Cart/DeletCartItyem"
import toast from "react-hot-toast"
import { UpadateCartItem } from "../../../Api/Cart/UpdateCartItems"
import { ClearCart } from "../../../Api/Cart/ClearCart"

import CheckOut from "../_components/CheckOut/CheckOut"
import { IconsContext } from "../../../Context/IconsContext"




export default function Cart() {

  const [count, setCount] = useState(0);

  let [isloadingDelete, setIsloadingDelete] = useState<null | string>(null)
  let [isloadingUpdate, setIsloadingUpdate] = useState<null | string>(null)
  let [clear, setClear] = useState(false)
  let router = useRouter()

  let cart = useContext(CartItemsContext)
  if (!cart) { return null }
  let { items, handelCartItem, setItems } = cart
  console.log(items);

   let context = useContext(IconsContext)
          if (!context) return null;
         let  { handelCartItemIcon } = context
  



  let handelUpdateCartItem = async (itemId: string, count: number) => {
    try {

      setIsloadingUpdate(itemId)
      let data = await UpadateCartItem(itemId, count)
      handelCartItem()
      setIsloadingUpdate(null)
      toast.success('Item updated')


      console.log(data);


    } catch (error) {
      console.log(error);


    }
  }

  let handelClearCart = async () => {
    try {

      setClear(true)
      let data = await ClearCart()
      setClear(false)
      handelCartItem()
      toast.success('All items have been removed from your cart.')


    } catch (error) {
      console.log(error);
      toast.error('error.message')


    }
  }

  let handelDeleteItem = async (itemId: string) => {
    try {
      setIsloadingDelete(itemId)
      let data = await DeleteCartItem(itemId)
      setItems(data)
      setIsloadingDelete(null)
      handelCartItemIcon()

      toast.success('Post deleted successfully. ')



    } catch (error) {

      console.log(error);

    }
  }




  return <>

    <div className="container mx-auto mt-30 p-5">
      <h1 className="text-2xl font-bold lg:text-5xl">Shopping Cart <span><i className="fa-solid fa-cart-shopping text-3xl fa-beat"></i></span></h1>
      {
        items?.data?.products?.length === 0 ? <p className="text-center text-2xl lg:text-3xl mt-20 font-bold ">Your cart is empty</p> :


          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            <div className="lg:col-span-3 mt-10 ">
              {items?.data?.products?.map((item) => {
                return <div key={item._id}>
                  <>
                    <div className="rounded-3xl shadow-2xl my-7 p-5 flex" >
                      <div>
                        <img className="size-40 rounded-3xl" src={item?.product?.imageCover}></img>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between px-5 pt-5 items-center ">
                          <p className="font-bold">{item?.product?.category?.name}</p>
                          <p className="font-bold">EGP{item?.price}</p>
                        </div>

                        <div>
                          <p className="px-5 my-2 text-gray-400">{item?.product?.brand?.name}</p>
                        </div>

                        <div className="px-5 mt-5 flex justify-between items-center">
                          <div className="flex gap-3 items-center">


                            <Button onClick={() => {
                              handelUpdateCartItem(item?.product?.id, item?.count - 1)

                            }} className={`bg-white shadow text-black text-2xl ${isloadingUpdate ? 'cursor-not-allowed' : 'cursor-pointer'} hover:bg-gray-100`}>

                              -


                            </Button>

                            <p>{isloadingUpdate === item.product.id ? <i className="fa-solid fa-spinner fa-spin"></i> : item.count}</p>

                            <Button onClick={() => {
                              handelUpdateCartItem(item?.product?.id, item?.count + 1)
                            }} className={`bg-white shadow text-black text-2xl ${isloadingUpdate ? 'cursor-not-allowed' : 'cursor-pointer'} hover:bg-gray-100`}>
                              +
                            </Button>
                          </div>

                          <div>

                            <span onClick={() => {
                              handelDeleteItem(item?.product?.id)

                            }} >

                              {isloadingDelete === item.product.id ? <i className="fa-solid fa-spinner text-red-600 fa-spin"></i> : <i className="fa-solid fa-trash-can text-red-600 cursor-pointer hover:scale-110 duration-300"></i>}

                            </span>




                          </div>
                        </div>
                      </div>
                    </div>

                  </>

                </div>
              })}

            </div>

            <div className="my-17 p-8 shadow-2xl h-fit rounded-3xl  ">
              <p className="text-2xl lg:text-3xl font-bold">Order Summary</p>
              <div className="flex justify-between items-center my-4">
                <p className="text-gray-400">Subtotal({items?.numOfCartItems})</p>
                <p className="font-bold">EGP<span className="ms-2">{items?.data?.totalCartPrice}</span></p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-400">Shipping</p>
                <p className="font-bold text-lime-500">Free</p>
              </div>
              <hr className="my-3"></hr>
              <div className="flex justify-between items-center my-4">
                <p className="font-bold">Total</p>
                <p className="font-bold">EGP<span className="ms-2">{items?.data?.totalCartPrice}</span></p>
              </div>
              <hr className="my-3"></hr>
              <div className="grid grid-cols-1 gap-3">
                <Button onClick={() => {
                  router.push('Products')

                }} className="cursor-pointer">Continue Shopping</Button>

                <CheckOut id={items?.cartId!} handelCartItem={handelCartItem} />

              </div>


            </div>
            <Button onClick={() => {
              handelClearCart()
            }} className="bg-black text-red-600 cursor-pointer border shadow-2xl">
              {clear ? <i className="fa-solid fa-spinner text-red-600 fa-spin"></i> : <>
                Clear all<span><i className="fa-solid fa-trash-can text-red-600 cursor-pointer hover:scale-110 duration-300"></i></span>
              </>

              }
            </Button>

          </div>
      }

    </div>

  </>
}
