import React from "react"
import { FilterContent, FiltersContainer, FilterWrapper, FilterHeader } from "../styles/pages/App"

interface FiltersProps {
  setSearch: (value: string) => void
  setSearchSku: (value: string) => void
  setPriceRange: (value: number) => void
  priceRange: number
  minValue: number
  maxValue: number
  loading: boolean
  openFilters: boolean
  setOpenFilters: (value: boolean) => void
}

export const Filters: React.FC<FiltersProps> = ({
  setSearch,
  setSearchSku,
  setPriceRange,
  priceRange,
  minValue,
  maxValue,
  loading,
  openFilters,
  setOpenFilters,
}) => {
  return (
    <FiltersContainer $openFilters={openFilters}>
      <FilterWrapper>
        <FilterHeader>
          Filtros
          <button
            style={{
              border: "none",
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "4px",
              color: "rgb(51, 51, 51)",
            }}
            onClick={() => {
              setOpenFilters(false)
            }}
          >
            X
          </button>
        </FilterHeader>
        <FilterContent>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del producto"
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <label htmlFor="sku">Sku</label>
          <input
            type="text"
            name="sku"
            id="sku"
            placeholder="SKU del producto"
            onChange={(e) => {
              setSearchSku(e.target.value)
            }}
          />
          <label htmlFor="price">Precio</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minValue}
            max={maxValue}
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{!loading ? minValue : null}</span>
            <span>{!loading ? maxValue : null}</span>
          </div>
        </FilterContent>
      </FilterWrapper>
    </FiltersContainer>
  )
}
