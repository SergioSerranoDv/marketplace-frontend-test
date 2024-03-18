import React, { useEffect } from "react"
import { getProducts } from "../services/Products_s"
export const UseGetProducts = () => {
  const [products, setProducts] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await getProducts()
        setProducts(response.products)
      } catch (error: any) {
        setError(error)
      }
      setLoading(false)
    }
    fetchProducts()
  }, [])
  return { products, loading, error }
}
