import React from "react"
import { connect } from "react-redux"
import { Product, ProductCart } from "../interfaces/Product"
import { RootState } from "../state/store"
import { addToCart } from "../state/actions/cart"
import { ProductCard, ProductButton } from "../styles/pages/App"
interface ProductItemProps {
  product: Product
}
interface StateProps {
  cart: ProductCart[]
}
interface DispatchProps {
  addToCart: (product: ProductCart) => void
}

const ProductItem: React.FC<ProductItemProps & StateProps & DispatchProps> = ({
  product,
  addToCart,
}) => {
  return (
    <ProductCard key={product._id}>
      <img src={product.image} alt={product.name} />
      <span>{product.name}</span>
      <span>SKU: {product.sku}</span>
      <span>
        US $<strong>{product.price}</strong>
      </span>
      <ProductButton
        onClick={() => {
          addToCart({
            _id: product._id,
            name: product.name,
            sku: product.sku,
            price: product.price,
            quantity: 1,
            image: product.image,
          })
        }}
      >
        Agregar al carrito
      </ProductButton>
    </ProductCard>
  )
}
const mapStateToProps = (state: RootState): StateProps => {
  return {
    cart: state.cart.cart,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (product: ProductCart) => dispatch(addToCart(product)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
