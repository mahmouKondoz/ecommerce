'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BrandItem } from '../../../../Api/Brands/BransItems';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import AddToCartBtn from '@/app/_components/AddToCartBtn/AddToCartBtn';
import AddToWishList from '@/app/_components/AddToWishList/page';
import Link from 'next/link';
import { productsType } from '../../../../Types/ProductType';

export default  function page() {
  let [brandData , setBrandData] = useState<productsType[]>([])
  

    const params = useParams();
const brandId = params?.brandId as string;
if (!brandId) return null;



    let handelBrandId = async()=>{
         let {data} = await  BrandItem(brandId)
       
    if (!Array.isArray(data)) {
      data = [data]
    }

         setBrandData(data)
          console.log(data);
    }

  useEffect(()=>{
    
    handelBrandId()
  } , [])
     
  return <>
  
  <div className='my-20'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-5 w-[90%] mx-auto ">
      {brandData?.map((product: productsType) => {


        return <div key={product.id}>

          <div className='border shadow rounded-2xl'>
            <img src={product?.image} alt="" />
          </div>
          <div className='my-5'>
            <p>No products found from this brand.</p>
          </div>



        </div>



      })}
    </div >
  </div>
  
  
  </>
}
