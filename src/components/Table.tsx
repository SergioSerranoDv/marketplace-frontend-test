import React, { useState } from "react"
import { Pagination } from "./Pagination"
import { ContainerTable, TableStyled, TableThead, TableTd } from "../styles/components/Table"

interface TableProps {
  columns: Array<any>
  data: Array<any>
  itemsPerpage: number
  filterData: {
    placeholder: string
    status: boolean
    column: string
    value: string
  }
}
//Render a table with the data and columns passed as props

export const Table: React.FC<TableProps> = ({ columns, data, itemsPerpage, filterData }) => {
  const [search, setSearch] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const lastIndexOfPage = currentPage * itemsPerpage
  const firstIndexOfPage = lastIndexOfPage - itemsPerpage
  const currentData = data.slice(firstIndexOfPage, lastIndexOfPage)
  const totalPages = Math.ceil(data.length / itemsPerpage)

  const filteredData = currentData.filter((row: any) => {
    return filterData.status && row.hasOwnProperty(filterData.column)
      ? row[filterData.column].toLowerCase().includes(search.toLowerCase())
      : false
  })

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  return (
    <>
      <input
        style={{
          padding: "0.5rem",
          borderRadius: "0.375rem",
          background: "#f2f2f2",
          marginBottom: "1rem",
          border: "1px solid #ccc",
          outline: "none",
        }}
        type="text"
        placeholder={filterData.placeholder}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <ContainerTable>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <div
            style={{
              display: "inline-block",
              minWidth: "100%",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <TableStyled>
                <TableThead>
                  <tr>
                    {columns.map((column, index) => (
                      <th
                        key={index}
                        style={{
                          padding: "1rem",
                          textAlign: "center",
                          ...(index === 0 && {
                            borderTopLeftRadius: "0.375rem",
                          }),
                          ...(index === columns.length - 1 && {
                            borderTopRightRadius: "0.375rem",
                          }),
                        }}
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </TableThead>
                <tbody>
                  {data.length > 0 &&
                    filteredData.map((row: any, index: any) => (
                      <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
                        {columns.map((column, colIndex) => (
                          <TableTd key={colIndex}>{row[column.toLowerCase()]}</TableTd>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </TableStyled>
            </div>
          </div>
        </div>
      </ContainerTable>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={nextPage}
        onPrevPage={prevPage}
      />
    </>
  )
}
