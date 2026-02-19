import { CartItem } from "./CartItem"
import { ShippingAddress } from "./ShippingAddress"
import { User } from "./User"

export type Order = Root2[]

export interface Root2 {
  shippingAddress: ShippingAddress
  taxPrice: number
  shippingPrice: number
  totalOrderPrice: number
  paymentMethodType: string
  isPaid: boolean
  isDelivered: boolean
  _id: string
  user: User
  cartItems: CartItem[]
  createdAt: string
  updatedAt: string
  id: number
  __v: number
}






