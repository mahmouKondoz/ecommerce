import { Brand } from "./Brand"
import { CategoriesTypes } from "./categoriesType"
import { Subcategory } from "./Subcategory"


export interface productsType{
  count: number
  _id: string
  product: productsType 
  price: number
}

export interface productsType {
  subcategory: Subcategory[]
  _id: string
  title: string
  imageCover: string
  category: CategoriesTypes
  brand: Brand
  ratingsAverage: number
  id: string
  price: number 
  image:string
  
 
  
}