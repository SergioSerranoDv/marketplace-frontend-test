import { Product } from "../interfaces/Product"
import { ApiProps } from "../context/ApiContext"
import { ApiResponse } from "../context/ApiContext"
export const getProducts = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}products/all`)
    const data = await response.json()

    return {
      code: 200,
      status: "success",
      products: data,
    }
  } catch (error) {
    return {
      code: 500,
      status: "error",
      message: "Error al obtener los productos",
    }
  }
}

export const getProductsByUser = async (
  backendApiCall: (requestData: ApiProps) => Promise<ApiResponse>
) => {
  return backendApiCall({
    endpoint: "products/user",
    method: "GET",
  })
}

export const deleteProduct = async (
  backendApiCall: (requestData: ApiProps) => Promise<ApiResponse>,
  id: string
) => {
  return backendApiCall({
    endpoint: `products/delete/${id}`,
    method: "DELETE",
  })
}

// try {
//   const response = await fetch(`http://localhost:5000/v1/products/delete/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   })

//   const data = await response.json()
//   return {
//     code: 200,
//     status: "success",
//     message: data.message,
//   }
// } catch (error) {
//   return {
//     code: 500,
//     status: "error",
//     message: "Error al obtener los productos",
//   }
// }

export const getProductById = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:5000/v1/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })

    const data = await response.json()
    return {
      code: 200,
      status: "success",
      product: data,
    }
  } catch (error) {
    return {
      code: 500,
      status: "error",
      message: "Error al obtener los productos",
    }
  }
}
export const updateProduct = async (
  backendApiCall: (requestData: ApiProps) => Promise<ApiResponse>,
  id: string,
  product: Product
) => {
  return backendApiCall({
    endpoint: `products/update/${id}`,
    method: "PUT",
    body: product,
  })
}

export const createProduct = async (
  backendApiCall: (requestData: ApiProps) => Promise<ApiResponse>,
  body: Product
) => {
  return backendApiCall({
    endpoint: "products/new",
    method: "POST",
    body: body,
  })
}
