import React from 'react'

export default async function CategoryDetails({params}:{params:{id:string}}) {

    
    let {id} = await params
    console.log(id);

    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
    let {data} = await response.json()
    console.log(data);
    
    
  return <>
  
  <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-10'>
    <div>
         <img className='size-full ' src={data.image} alt="" />
    </div>
    <div className='flex flex-col justify-center'>
        <p className='text-xl font-bold lg:text-6xl '>{data.name}</p>
        <p>{data.slug}</p>
    </div>
   
  </div>
  </>
}
