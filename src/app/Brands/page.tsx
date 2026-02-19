import React from 'react'
import { BrandsApi } from '../../../Api/Brands/Brands'
import Link from 'next/link';

export default async function Brands() {



   

      

            let {data} = await BrandsApi()
            console.log(data);
            
      
  return <>

  <div className='container mx-auto mt-20'>
    <h1 className='text-2xl lg:text-5xl font-bold'>Brands</h1>

    
        <div className='grid-cols-1 grid  lg:grid-cols-4 gap-8 my-5'>
            
            {
                data.map((brand:any)=>{
                    return  <div className='shadow-xl p-5 border rounded-2xl cursor-pointer hover:scale-105 duration-500'>
                        <Link href={`Brands/${brand?._id}`}>
                        <img src={brand.image} alt="" />
                        
                        </Link>
                    </div>

                })
            }
            

        </div>
    

  </div>
  
  
  
  
  
  </>
}
