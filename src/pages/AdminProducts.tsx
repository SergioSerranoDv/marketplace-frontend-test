import React from "react"
import Header from "../components/Header"
import { Table } from "../components/Table"
import { SideBar } from "../components/SideBar"
import { UseGetProducts } from "../Hooks.ts/UseGetProducts"
import { Product } from "../interfaces/Product"
import { Main } from "../styles/pages/Dashboard"

export const AdminProducts = () => {
  const { products } = UseGetProducts()
  return (
    <div>
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
            columns={["sku", "Usuario", "Nombre", "Cantidad", "Precio"]}
            data={
              products.length > 0
                ? (products.map((product: Product) => ({
                    sku: product.sku,
                    usuario: product.email,
                    nombre: product.name,
                    cantidad: product.amount,
                    precio: product.price,
                  })) as any)
                : []
            }
            filterData={{
              status: true,
              placeholder: "Buscar por usuario",
              column: "usuario",
              value: "email",
            }}
            itemsPerpage={5}
          ></Table>
        </div>
      </Main>
    </div>
  )
}
