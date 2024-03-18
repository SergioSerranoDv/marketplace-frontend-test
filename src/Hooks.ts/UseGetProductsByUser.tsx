import React, { useEffect, useContext } from "react"
import { ApiContext } from "../context/ApiContext"

import { getProductsByUser } from "../services/Products_s"
export const UseGetProductsByUser = () => {
  const { backendApicall } = useContext(ApiContext)
  const [products, setProducts] = React.useState([])
  const [refetch, setRefetch] = React.useState(0)

  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  useEffect(() => {
    const fetchProductsByUser = async () => {
      setLoading(true)
      try {
        const response = await getProductsByUser(backendApicall)
        setProducts(response.data)
      } catch (error: any) {
        setError(error)
      }
      setLoading(false)
    }
    fetchProductsByUser()
  }, [refetch])
  return { products, loading, error, setRefetch }
}
