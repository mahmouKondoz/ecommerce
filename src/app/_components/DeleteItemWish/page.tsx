import React, { useContext, useState } from 'react'
import { RemoveItem } from '../../../../Api/WishList/removeItem'
import toast from 'react-hot-toast'
import { IconsContext } from '../../../../Context/IconsContext';

export default function DeleteItemWish({id , handelDisplayWishList}:{id:string , handelDisplayWishList:()=>{}}) {

     let context = useContext(IconsContext)
        if (!context) return null;
       let  { handelDisplayWishListContext } = context

    let [isloading , setIsloading] = useState(false)


    let handelRemoveItem = async()=>{
        try {
            setIsloading(true)
            let data = await RemoveItem(id)
            toast.success('Item deleted')
            handelDisplayWishList()
            handelDisplayWishListContext()
            
        } catch (error) {
            setIsloading(true)
            
        }finally{
            setIsloading(false)
        }
    }


  return <>


  {isloading ? <i className="fa-solid fa-spinner cursor-not-allowed  fa-spin"></i>:<i onClick={()=>{
    handelRemoveItem()
  }} className="fa-solid fa-trash-can hover:scale-105 text-red-700  text-xl cursor-pointer fa-heart "></i>}
  
  
  
  
  
  </>
}
