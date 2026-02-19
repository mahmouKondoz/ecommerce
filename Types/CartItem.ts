import { productsType } from "./ProductType"

export interface CartItem {
  count: number
  product: productsType
  price: number
  _id: string
}