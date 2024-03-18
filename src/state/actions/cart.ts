import { ProductCart } from "../../interfaces/Product"
export const ADD_TO_CART = "ADD_TO_CART"
export interface AddToCartAction {
  type: typeof ADD_TO_CART
  payload: ProductCart
}
export const addToCart = (payload: ProductCart) => ({
  type: "ADD_TO_CART",
  payload,
})
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART
  payload: string
}
export const removeFromCart = (payload: string) => ({
  type: "REMOVE_FROM_CART",
  payload,
})

export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY"
export interface IncrementQuantityAction {
  type: typeof INCREMENT_QUANTITY
  payload: string
}

export const incrementQuantity = (payload: string) => ({
  type: "INCREMENT_QUANTITY",
  payload,
})
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY"
export interface DecrementQuantityAction {
  type: typeof DECREMENT_QUANTITY
  payload: string
}
export const decrementQuantity = (payload: string) => ({
  type: "DECREMENT_QUANTITY",
  payload,
})

export const CHANGE_QUANTITY = "CHANGE_QUANTITY"
export interface ChangeQuantityAction {
  type: typeof CHANGE_QUANTITY
  payload: { id: string; quantity: number }
}
export const changeQuantity = (payload: { id: string; quantity: number }) => ({
  type: "CHANGE_QUANTITY",
  payload,
})
