import { log } from "console"


export  let getProducts = async()=>{
    let response = await fetch('https://ecommerce.routemisr.com/api/v1/products' , {
      next:{revalidate:60} /* useing isr to recach the data each 60 min  */
    })
  let { data } = await response.json()

 
  

  return data
  





}