'use client'
import { NavContext } from '../../../../Context/NavContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect} from 'react'
import { Badge } from "@/components/ui/badge"
import { IconsContext } from '../../../../Context/IconsContext'
import ProfileMenu from '../ProfileMenu/ProfileMenu'



export default function NavBar() {
    
    let context = useContext(NavContext)
    if (!context) return null;
   let  { islogin } = context

   let user = useContext(IconsContext)
     if(!user){return null}
     let{UserData} = user

    let x = useContext(IconsContext)
    if (!x) return null;
   let  { count , countCart , isLoading ,isLoadingCart , setCountCart , setCount} = x

   console.log();
   

   useEffect(()=>{
    setCount(count)
   setCountCart(countCart)

   })
   


   


  

     
  

  


    let path = usePathname()
    return <>

        <nav className="bg-gray-100 flex items-center px-4 md:px-6 py-4 fixed top-0 left-0 w-full z-50">
    <div className="flex items-center gap-2">
      <i className="fa-solid text-2xl text-lime-500 fa-cart-shopping"></i>
      <Link href="/" className="text-black font-bold text-xl md:text-2xl">
        Fresh cart
      </Link>
    </div>

    <ul className="hidden md:flex gap-6 flex-1 justify-center text-gray-600 text-lg">
      <li>
        <Link className={path === '/Products' ? 'active' : ''} href="/Products">
          Products
        </Link>
      </li>
      <li>
        <Link className={path === '/Categories' ? 'active' : ''} href="/Categories">
          Categories
        </Link>
      </li>
      <li>
        <Link className={path === '/Brands' ? 'active' : ''} href="/Brands">
          Brands
        </Link>
      </li>
     
    </ul>

    <div className="flex items-center gap-4 ml-auto md:ml-0">
      {islogin && (
        <>
          <div className="relative">
            <Link href="Cart">
              <i className="fa-solid text-xl fa-cart-shopping"></i>
            </Link>
            <div className="absolute -top-4 left-4">
              <Badge className="size-4 bg-lime-500 shadow">
                {isLoadingCart ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  countCart
                )}
              </Badge>
            </div>
          </div>

          <div className="relative">
            <Link href="WishList">
              <i className="fa-solid text-xl fa-heart"></i>
            </Link>
            <div className="absolute -top-4 left-4">
              <Badge className="size-4 bg-lime-500 shadow">
                {isLoading ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  count
                )}
              </Badge>
            </div>
          </div>
        </>
      )}

      <div className="hidden sm:flex items-center gap-2">
        <ProfileMenu />
        {islogin && <p className="font-bold text-sm md:text-base">{UserData}</p>}
      </div>

      <div className="md:hidden">
        <ProfileMenu />
      </div>
    </div>
  </nav>
    </>
}
