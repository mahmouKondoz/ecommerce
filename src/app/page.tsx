import { Button } from "@/components/ui/button";
import Link from "next/link";






export default async function Home() {






  return <>



    <div className="flex justify-center items-center h-screen flex-col ">
      <div>
        <h1 className="text-2xl lg:text-6xl font-bold text-center">Welcome to ShopMart</h1>
        <p className="my-5 text-xl px-5 text-center">Discover the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.</p>
      </div>
      <div className="">
        <Link href='Products'>
        <Button className="me-4 cursor-pointer font-bold">Shop Now</Button>
        </Link>
        <Link href='Categories'>
        <Button className="bg-white border-2 cursor-pointer text-black hover:bg-gray-50 font-bold"> Browse Categories</Button>
        </Link>
      </div>

    </div>


  </>
}
