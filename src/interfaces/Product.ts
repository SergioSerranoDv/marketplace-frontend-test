export interface Product {
  _id?: string
  amount?: number
  user?: string
  email?: string
  name: string
  sku: string
  price: number
  image?: string
  createdAt?: string
  updatedAt?: string
  __v?: number
}

export interface ProductCart extends Product {
  quantity: number
}
