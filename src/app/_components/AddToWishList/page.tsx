'use client'
import React, { useContext, useState } from 'react'
import { AddToWishListApi } from '../../../../Api/WishList/AddToWishList'
import toast from 'react-hot-toast'
import { IconsContext } from '../../../../Context/IconsContext'
import { useRouter } from 'next/navigation'

export default function AddToWishList({id}:{id:string}) {
    let [isloading , setIsloading] = useState(false)
    let ProducId = id
    let router = useRouter()

    let addWish = useContext(IconsContext)
      if(!addWish){return null}
      let {handelDisplayWishListContext} = addWish
    

    let HandelAddToWishList = async ()=>{

        try {
            setIsloading(true)
            if(localStorage.getItem('userToken')){
              let data = await AddToWishListApi(ProducId)
              console.log(data);
              
            toast.success('Added to your wishlist successfully!')
            handelDisplayWishListContext()
            
           
            
            }else{
              alert("    You need to sign in to save items to your wishlist. ");
              router.push("/Login");
            }
            

        } catch (error) {
            toast.error('Network error')
            setIsloading(true)
            
        }finally{
            setIsloading(false)
        }



    }

  return <>
  {isloading ? <i className="fa-solid fa-spinner cursor-not-allowed fa-spin"></i> : <i onClick={()=>{
    HandelAddToWishList()
    
  }} className="fa-solid text-2xl  hover:scale-105 cursor-pointer fa-heart"></i>}
  
  
  </>
}
