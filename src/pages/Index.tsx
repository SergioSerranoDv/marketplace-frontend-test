import React, { useState, useMemo, useEffect } from "react"
import Header from "../components/Header"
import ProductItem from "../components/ProductItem"
import { Filters } from "../components/Filters"
import { UseGetProducts } from "../Hooks.ts/UseGetProducts"
import { Product } from "../interfaces/Product"
import { GridProducts, Grid } from "../styles/pages/App"
import filtersIcon from "../assets/icons/filters.svg"

export const Index = () => {
  const [search, setSearch] = useState<string>("")
  const [searchSku, setSearchSku] = useState<string>("")
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  const [priceRange, setPriceRange] = useState<number>(0)
  const [openFilters, setOpenFilters] = useState<boolean>(false)
  const { products = [], loading } = UseGetProducts()

  const filteredProducts = useMemo(() => {
    if (products.length === 0) {
      return []
    }

    return products.filter((product: Product) => {
      const nameMatch =
        search !== "" ? product.name.toLowerCase().includes(search.toLowerCase()) : true
      const skuMatch =
        searchSku !== "" ? product.sku.toLowerCase().includes(searchSku.toLowerCase()) : true
      const priceMatch =
        priceRange > minValue ? product.price > minValue && product.price <= priceRange : true

      return nameMatch && skuMatch && priceMatch
    })
  }, [search, searchSku, minValue, priceRange, products])

  useEffect(() => {
    if (!loading && products.length > 0) {
      const minPrice = Math.min(...products.map((product: Product) => product.price))
      const maxPrice = Math.max(...products.map((product: Product) => product.price))
      setMinValue(minPrice)
      setMaxValue(maxPrice)
      setPriceRange(minPrice)
    }
  }, [loading, products])
  return (
    <div className="App">
      <Header />
      <main
        style={{
          overflow: "hidden",
          padding: "2rem",
        }}
      >
        <Filters
          setSearch={setSearch}
          setSearchSku={setSearchSku}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
          minValue={minValue}
          maxValue={maxValue}
          loading={loading}
          openFilters={openFilters}
          setOpenFilters={setOpenFilters}
        />
        <div
          style={{
            background: "#ffff",
            display: "flex",
            padding: "1rem",
            borderRadius: "9px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "1rem",
            justifyContent: "space-between",
          }}
        >
          Filtros
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setOpenFilters(!openFilters)}
          >
            <img width={20} height={20} src={filtersIcon} alt="Filtra los productos" />
          </button>
        </div>
        <GridProducts>
          <Grid>
            {!loading &&
              filteredProducts.map((product: Product) => {
                return <ProductItem key={product._id} product={product} />
              })}
          </Grid>
        </GridProducts>
      </main>
    </div>
  )
}
