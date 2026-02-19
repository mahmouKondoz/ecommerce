'use client'
import React, { useEffect, useState } from 'react'
import { DisplayWishList } from '../../../Api/WishList/DisplayWishList'
import { productsType } from '../../../Types/ProductType';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'lucide-react';
import AddToCartBtn from '../_components/AddToCartBtn/AddToCartBtn';
import AddToWishList from '../_components/AddToWishList/page';
import DeleteItemWish from '../_components/DeleteItemWish/page';

export default function page() {
   let [items , setItems] = useState<[]>()


  
    let handelDisplayWishList = async()=>{
       try {
        
        
        let data = await DisplayWishList()
         setItems(data?.data)
         console.log(data);
         
      
        
       } catch (error) {
        console.log(error);
        
        
       }
      
    }
   useEffect(()=>{
    handelDisplayWishList()
   },[])

   
 
 
return <>
    <div className=' mt-30'>
      <div className=' w-[90%] mx-auto'>
         <h1 className='text-3xl font-bold'>Favorites</h1>
      <p>Find your saved items and get ready to order them</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-8 w-[90%] mx-auto ">
      {items?.map((product: productsType) => {


        return <div key={product.id}>

          <Card className="hover:scale-105 duration-500 py-6 relative ">
            <CardHeader>

              <CardTitle>
               
                  <img className="size-full rounded-2xl cursor-pointer" src={product?.imageCover} alt="" />
                
              </CardTitle>
              <CardDescription>
                <p className="text-lime-400 font-bold  ">{product.category.name}</p>
              </CardDescription>

            </CardHeader>
            <CardContent>
              <p className="line-clamp-1">{product.title}</p>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="flex justify-between w-full items-center">

                <p className="text-sm ">{product.price}<span className="ms-1">EGp</span></p>
                <p className="text-sm"> <span className="text-yellow-400"><i className="fa-solid fa-star"></i></span> {product.ratingsAverage}</p>

              </div>
               <i className="fa-solid text-2xl  hover:scale-105 text-red-700 top-0 start-0 cursor-pointer fa-heart absolute p-2"></i>
               
               <div className="flex justify-center items-center gap-2 w-full">
                <AddToCartBtn  id = {product?.id}/>
                <DeleteItemWish id = {product?.id} handelDisplayWishList={handelDisplayWishList}/>
               </div>



            </CardFooter>
          </Card>



        </div>



      })}
    </div >

    </div>
  </>
  
}
