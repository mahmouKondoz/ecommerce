import { CategoriesTypes } from "./categoriesType"
import { productsType } from "./ProductType"

export interface Cart {
  status: string
  numOfCartItems: number
  cartId: string
  data: Data
}

export interface Data {
  _id: string
  cartOwner: string
  products: productsType[]
  createdAt: string
  updatedAt: string
  __v: number
  totalCartPrice: number
}



