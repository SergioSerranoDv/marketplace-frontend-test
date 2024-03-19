import { ProductCart } from "../../interfaces/Product"
export interface CartState {
  cart: ProductCart[]
}

const initialState: CartState = {
  cart: [],
}
const cartReducer = (state = initialState, action: any): CartState => {
  let existingItem
  let updatedCart
  switch (action.type) {
    case "ADD_TO_CART":
      existingItem = state.cart.find((item) => item._id === action.payload._id)
      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item
        )
        return { ...state, cart: updatedCart }
      } else {
        return { ...state, cart: [...state.cart, action.payload] }
      }
    case "REMOVE_FROM_CART":
      existingItem = state.cart.find((item) => item._id === action.payload)
      updatedCart = state.cart.filter((item) => item._id !== action.payload)
      return { ...state, cart: updatedCart }

    case "INCREMENT_QUANTITY":
      existingItem = state.cart.find((item) => item._id === action.payload)
      updatedCart = state.cart.map((item: any) =>
        item._id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      )
      return { ...state, cart: updatedCart }
    case "DECREMENT_QUANTITY":
      existingItem = state.cart.find((item) => item._id === action.payload)
      if (existingItem?.quantity === 1) {
        updatedCart = state.cart.filter((item: any) => item._id !== action.payload)
        return { ...state, cart: updatedCart }
      } else {
        updatedCart = state.cart.map((item: any) =>
          item._id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        )
        return { ...state, cart: updatedCart }
      }
    case "CHANGE_QUANTITY":
      if (action.payload.quantity === 0) {
        updatedCart = state.cart.filter((item: any) => item._id !== action.payload.id)
        return { ...state, cart: updatedCart }
      }
      updatedCart = state.cart.map((item: any) =>
        item._id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      )
      return { ...state, cart: updatedCart }
    default:
      return state
  }
}

export default cartReducer
