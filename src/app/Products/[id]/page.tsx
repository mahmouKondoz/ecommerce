
import AddToCartBtn from "@/app/_components/AddToCartBtn/AddToCartBtn"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default async function GetProducdetails({ params}:{params:{id:string}}) {

  let { id } = await params
  let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  let { data } = await response.json()
  console.log(data);





  return <>

    <div className="container mx-auto px-4 py-10">
      <div className='grid grid-cols-1  lg:grid-cols-2 '>
        <div className='p-10 ms-5'>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl cursor-pointer hover:scale-105 duration-300"> {data?.brand.name}</h1>
          <Carousel >
            <CarouselContent>
              <CarouselItem>
                <img src={data.images[0]} alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src={data.images[1]} alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src={data.images[2]} alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src={data.images[3]} alt="" />
              </CarouselItem>
            </CarouselContent>

          </Carousel>

        </div>

        <div className="flex flex-col justify-center">
          <p className="font-bold text-3xl md:text-4xl lg:text-5xl">
            {data.title}
          </p>

          <p className="my-4 text-base md:text-lg">
            {data.description}
          </p>

          <div className="flex items-center justify-between py-3">
            <p className="text-lg font-semibold">
              {data.price} EGP
            </p>

            <p className="text-sm">
              <span className="text-yellow-400">
                <i className="fa-solid fa-star"></i>
              </span>
              {data.ratingsAverage}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <AddToCartBtn id = {data.id}/>
            <i className="fa-solid fa-heart text-2xl cursor-pointer"></i>
          </div>
        </div>

      </div>

    </div>



  </>
}

