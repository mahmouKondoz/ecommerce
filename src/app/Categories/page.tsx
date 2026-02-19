import React from 'react'
import {
  Card,
  CardFooter,
  CardHeader,

}
  from "@/components/ui/card"
import Link from 'next/link';
import { CategoriesTypes } from '../../../Types/categoriesType';

export default async function Categories() {

  let reposnse = await fetch('https://ecommerce.routemisr.com/api/v1/categories')
  let { data } = await reposnse.json()
  






  return <>


    <div className='container mx-auto my-10 p-5 '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((category: CategoriesTypes) => {
          return <div key={category._id}>
            <Card className=' shadow-2xl hover:scale-105 duration-500'>
              <CardHeader>
                <Link href={`/Categories/${category._id}`}>

                  <img className='size-full h-100 object-cover lg:h-130' src={category.image}></img>
                </Link>

              </CardHeader>
              <p className='text-center text-3xl font-bold'>{category.name}</p>

              <CardFooter>

              </CardFooter>
            </Card>



          </div>
        })}
      </div>

    </div>

  </>
}
