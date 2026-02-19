 import { getProducts } from "../../../Api/Product/GetProducs"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { productsType } from "../../../Types/ProductType"
import AddToCartBtn from "../_components/AddToCartBtn/AddToCartBtn"
import AddToWishList from "../_components/AddToWishList/page"




export default async function Products() {

  


  let data = await getProducts()
  console.log(data);
  


  return <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-5 w-[90%] mx-auto ">
      {data.map((product: productsType) => {


        return <div key={product.id}>

          <Card className="hover:scale-105 duration-500 py-6 ">
            <CardHeader>

              <CardTitle>
                <Link href={`/Products/${product.id}`}>
                  <img className="size-full rounded-2xl cursor-pointer" src={product.imageCover} alt="" />
                </Link>
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

               <div className="flex justify-center items-center gap-2 w-full">
                <AddToCartBtn id = {product?.id}/>
                <AddToWishList id = {product?.id}/>
               </div>



            </CardFooter>
          </Card>



        </div>



      })}
    </div >
  </>
}
