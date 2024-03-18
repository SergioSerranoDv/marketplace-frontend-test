import React, { useState } from "react"
import { ProductCart } from "../interfaces/Product"
import { connect } from "react-redux"
import Controllers from "./Controllers"
import { removeFromCart } from "../state/actions/cart"
import { CartContainer, CartWrapperContent, CloseButton } from "../styles/components/Cart"
import cartIcon from "../assets/icons/cart.svg"

interface StateProps {
  cart: ProductCart[]
}
interface DispatchProps {
  removeProduct: (id: string) => void
}

const Cart: React.FC<StateProps & DispatchProps> = ({ cart, removeProduct }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

  return (
    <CartContainer
      onMouseEnter={() => setIsCartOpen(true)}
      onMouseLeave={() => setIsCartOpen(false)}
    >
      <img
        style={{
          marginRight: "0.2rem",
        }}
        width={20}
        height={20}
        src={cartIcon}
        alt="Agregar al carrito"
      />
      <span
        style={{
          color: "rgb(37 99 235)",
        }}
      >
        Carrito {cart.length > 0 && <span> ({cart.length})</span>}
      </span>
      {isCartOpen && cart.length > 0 && (
        <CartWrapperContent>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              Tu Carrito ({cart.length})
            </span>
            <CloseButton
              onClick={() => {
                setIsCartOpen(!isCartOpen)
              }}
            >
              X
            </CloseButton>
          </div>
          {cart.map((product: ProductCart) => (
            <div
              key={product._id}
              style={{
                paddingTop: "1.5rem",
                display: "flex",
                flexDirection: "column",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <CloseButton
                  onClick={() => removeProduct(product._id as string)}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "0.5rem",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  X
                </CloseButton>
                <div>
                  <img width={90} height={90} src={product.image} alt={product.name} />
                </div>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    {product.name}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Controllers item={product} />
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "500",
                      }}
                    >
                      {" "}
                      $ {product.price * product.quantity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CartWrapperContent>
      )}
    </CartContainer>
  )
}

const mapStateToProps = (state: any): StateProps => {
  return {
    cart: state.cart.cart,
  }
}
const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    removeProduct: (id: string) => dispatch(removeFromCart(id)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
