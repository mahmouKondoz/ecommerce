'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../../../Api/Product/GetProducs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import AddToCartBtn from '@/app/_components/AddToCartBtn/AddToCartBtn';
import AddToWishList from '@/app/_components/AddToWishList/page';
import Link from 'next/link';
import { productsType } from '../../../../Types/ProductType';

export default function page() {
  const [brandProducts, setBrandProducts] = useState<productsType[]>([])
  const [loading, setLoading] = useState(true)

  const params = useParams();
  const brandId = params?.brandId as string;
  if (!brandId) return null;

  const loadBrandProducts = async () => {
    setLoading(true)
    try {
      const data = await getProducts()
     
      const filtered = (Array.isArray(data) ? data : []).filter((p: any) => {
        const pBrandId = p?.brand?._id || p?.brand?.id || p?.brand
        const catName = p?.category?.name || p?.category || ''
        return (
          String(pBrandId) === String(brandId) &&
          String(catName).toLowerCase().includes('shoe')
        )
      })

      setBrandProducts(filtered)
    } catch (err) {
      console.error(err)
      setBrandProducts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBrandProducts()
  }, [brandId])

  return (
    <div className='my-20'>
      <div className="w-[90%] mx-auto p-10">
        {loading ? (
          <p>Loading products...</p>
        ) : brandProducts.length === 0 ? (
          <p className='text-center'>No shoes found for this brand.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {brandProducts.map((product: any) => (
              <div key={product.id || product._id} className='border rounded-2xl p-4'>
                <Link href={`/Products/${product.id || product._id}`}>
                  <img src={product?.image || product?.imageCover} alt={product.title} className='w-full h-48 object-cover rounded-lg' />
                </Link>
                <div className='my-3'>
                  <h3 className='font-semibold'>{product.title}</h3>
                  <p className='text-lg font-bold'>${product.price}</p>
                </div>
                <div className='flex gap-2'>
                  <AddToCartBtn id={product.id || product._id} />
                  <AddToWishList id={product.id || product._id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
