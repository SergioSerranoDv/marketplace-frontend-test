import React from "react"
import Header from "../components/Header"
import { SideBar } from "../components/SideBar"
import { Table } from "../components/Table"
import { ProductForm } from "../components/ProductForm"
import { ModalForm } from "../components/ModalForm"
import { UseGetProductsByUser } from "../Hooks.ts/UseGetProductsByUser"
import { Product } from "../interfaces/Product"
import { Actions } from "../components/Actions"
import { deleteProduct } from "../services/Products_s"
import { Button, Main } from "../styles/pages/Dashboard"

export const Dashboard = () => {
  const { products, setRefetch } = UseGetProductsByUser()
  const [showModal, setShowModal] = React.useState(false)

  return (
    <>
      <Header />
      <Main>
        <SideBar></SideBar>
        <div
          style={{
            padding: "2rem",
            flex: 1,
          }}
        >
          <h2>Todos los productos</h2>
          <Table
            columns={["sku", "Nombre", "Cantidad", "Precio", "Acciones"]}
            data={
              products.length > 0
                ? (products.map((product: Product) => ({
                    sku: product.sku,
                    nombre: product.name,
                    cantidad: product.amount,
                    precio: product.price,
                    acciones: (
                      <Actions
                        deleteAction={deleteProduct}
                        id={product._id as string}
                        refetch={setRefetch}
                        setShowModal={setShowModal}
                        product={product}
                        showModal={showModal}
                      />
                    ),
                  })) as any)
                : []
            }
            filterData={{
              status: true,
              placeholder: "Buscar por nombre",
              column: "nombre",
              value: "name",
            }}
            itemsPerpage={5}
          ></Table>
          <Button
            onClick={() => {
              setShowModal(true)
            }}
          >
            Crear producto
          </Button>
          {showModal && (
            <ModalForm showModal={showModal} setShowModal={setShowModal}>
              <ProductForm
                type="create"
                setShowModal={setShowModal}
                refetch={setRefetch}
              ></ProductForm>
            </ModalForm>
          )}
        </div>
      </Main>
    </>
  )
}
