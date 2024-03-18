import React, { useContext } from "react"
import { ApiContext } from "../context/ApiContext"
import { Product } from "../interfaces/Product"
import { createProduct, updateProduct } from "../services/Products_s"
import { Form, Input, Label, Button } from "../styles/modal"
interface ProductFormProps {
  type: "create" | "update"
  product?: Product
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  refetch?: React.Dispatch<React.SetStateAction<number>>
}
export const ProductForm: React.FC<ProductFormProps> = ({
  product,
  setShowModal,
  refetch,
  type,
}) => {
  const { backendApicall } = useContext(ApiContext)
  const validateField = (fieldName: string, fieldValue: string) => {
    if (!fieldValue) {
      alert(`Debes completar el campo ${fieldName}`)
      return true
    }
    return false
  }
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const sku = formData.get("sku") as string
    const name = formData.get("name") as string
    const amount = formData.get("amount") as string
    const price = formData.get("price") as string
    if (validateField("sku", sku)) return
    if (validateField("Nombre", name)) return
    if (validateField("Cantidad", amount)) return
    if (validateField("Precio", price)) return
    try {
      const response =
        type === "create"
          ? await createProduct(backendApicall, {
              sku,
              name,
              amount: parseInt(amount),
              price: parseInt(price),
            })
          : await updateProduct(backendApicall, product?._id as string, {
              sku,
              name,
              amount: parseInt(amount),
              price: parseInt(price),
            })
      if (response.status === "success") {
        alert((await response).message)
        form.reset()
        setShowModal(false)
        refetch && refetch((prev) => prev + 1)
        return
      }
      alert(response.message)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <>
      <h2>{type === "create" ? "Crear nuevo producto" : "Actualizar producto"}</h2>
      <Form onSubmit={(e) => handleFormSubmit(e)}>
        <Label htmlFor="sku">SKU</Label>
        <Input type="text" id="sku" name="sku" defaultValue={product?.sku ?? ""} />
        <Label htmlFor="name">Nombre</Label>
        <Input type="text" id="name" name="name" defaultValue={product?.name ?? ""} />
        <Label htmlFor="amount">Cantidad</Label>
        <Input type="number" id="amount" name="amount" defaultValue={product?.amount ?? ""} />
        <Label htmlFor="price">Precio</Label>
        <Input type="number" id="price" name="price" defaultValue={product?.price ?? ""} />
        <Button type="submit">Guardar</Button>
      </Form>
    </>
  )
}
