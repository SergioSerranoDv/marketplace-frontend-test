import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import {
  WrapperControllers,
  ButtonController,
  InputController,
} from "../styles/components/Controllers"
import { ProductCart } from "../interfaces/Product"
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  changeQuantity,
} from "../state/actions/cart"

interface ControllersProps {
  item: ProductCart
}

interface DispatchProps {
  removeProduct: (id: string) => void
  incrementQuantity: (id: string) => void
  decrementQuantity: (id: string) => void
  changeQuantity: (id: string, quantity: number) => void
}
const Controllers: React.FC<ControllersProps & DispatchProps> = ({
  item,
  incrementQuantity,
  decrementQuantity,
  changeQuantity,
}) => {
  const [inputNewQuantity, setInputNewQuantity] = useState<number>(item.quantity)

  useEffect(() => {
    setInputNewQuantity(item.quantity)
  }, [item.quantity])

  return (
    <WrapperControllers>
      <ButtonController
        onClick={() => {
          decrementQuantity(item._id as string)
        }}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="minus"
          width={14}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M432 256c0 13.3-10.7 24-24 24L40 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l368 0c13.3 0 24 10.7 24 24z"
          ></path>
        </svg>
      </ButtonController>
      <InputController
        type="number"
        pattern="\d*"
        value={inputNewQuantity}
        onChange={(e) => {
          const newValue = parseInt(e.target.value)
          setInputNewQuantity(newValue)
          if (!isNaN(newValue)) {
            changeQuantity(item._id as string, parseInt(e.target.value))
          }
        }}
      />
      <ButtonController
        onClick={() => {
          incrementQuantity(item._id as string)
        }}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="plus"
          width={14}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"
          ></path>
        </svg>
      </ButtonController>
    </WrapperControllers>
  )
}
const mapStateToProps = (state: any) => {
  return {
    cart: state.cart.cart,
  }
}
const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    removeProduct: (id: string) => dispatch(removeFromCart(id)),
    incrementQuantity: (id: string) => dispatch(incrementQuantity(id)),
    decrementQuantity: (id: string) => dispatch(decrementQuantity(id)),
    changeQuantity: (id: string, quantity: number) => dispatch(changeQuantity({ id, quantity })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controllers)
