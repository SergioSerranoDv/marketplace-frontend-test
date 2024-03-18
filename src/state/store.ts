import { createStore, combineReducers } from "redux"
import cartReducer from "./reducers/cart"
import { CartState } from "./reducers/cart"

export interface RootState {
  cart: CartState
}

const rootReducer = combineReducers({
  cart: cartReducer,
})
const store = createStore(rootReducer)
export default store
