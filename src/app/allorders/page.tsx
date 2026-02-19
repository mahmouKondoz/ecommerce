'use client'
import React, { useContext, useEffect, useState } from 'react'
import { CartItemsContext } from '../../../Context/CartItemsContext'
import { UserOrders } from '../../../Api/Orders/UserOrders'
import { date, object } from 'zod'
import { Order } from '../../../Types/Orders'

export default function page() {
  let [orders , setOrders] = useState<Order>()
   let cart = useContext(CartItemsContext)
   if(!cart){return null}
  let {items} = cart
  let ownerId:string|undefined = items?.data?.cartOwner

  console.log(ownerId);
  

  

  let handelUserOrders = async ()=>{
   
 
    if (!ownerId) return

  try {
    let data = await UserOrders(ownerId)
    setOrders(data)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
  }

  useEffect(()=>{
   
      if(ownerId){
        handelUserOrders()
      } /* don't call the function unless the owner id has a value */
 
      
  },[ownerId])
  



  return <>

  <div className='h-screen container mx-auto grid grid-cols-1 my-25 gap-5 '>
    {orders?.map((order)=>{
      return<div className='bg-white shadow-2xl p-8 rounded-3xl '>
       <div>
         <h1 className='font-bold'>Order#:{order.id}</h1>
        <p className='text-gray-400'> By{order.user.name} <span>|</span> {new Date(order.createdAt).toLocaleDateString('en-us',{
          year:'numeric'
            ,month:'short'
            ,day:'numeric'

        })}
        </p>
       </div>
       <hr className='my-3 w-[90%]'></hr>
       <div>

        <p className='text-gray-400'>Payment Method:<span className='text-lime-600'>{order.paymentMethodType}</span></p>
       <p className='text-gray-400'>Delivered:<span className='text-orange-600'>{order.isDelivered ? 'Yes':'No'}</span></p>
       <p className='text-gray-400'>Delivered to :<span className='text-black'>{order.shippingAddress.details},{order.shippingAddress.city}</span></p>
       <p className='text-black'>Total:<span className='text-black ms-1'>EGP{order.totalOrderPrice}</span></p>


       </div>
       <hr className='my-3 w-[90%]'></hr>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {order?.cartItems.map((item)=>{
          return<div className='w-full shadow rounded-3xl flex items-center gap-4'>
            <div>
              <img className='size-50' src={item?.product?.imageCover} alt="" />
              </div>
            <div>
              <p className='font-bold'>{item.product.title}</p>
              <p>Quantity<span>[{item.count}]</span></p>
              <p>Price:<span className='ms-1'>EGP{item.price}</span></p>
            
            </div>
          </div>

        })}


       </div>

       
      </div>

    })}
    
  </div>
  

  
  </>
}
