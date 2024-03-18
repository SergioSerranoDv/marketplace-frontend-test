interface PaginationProps {
  currentPage: number
  totalPages: number
  onNextPage: () => void
  onPrevPage: () => void
}
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "300px",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <button
        style={{
          padding: "0.5rem",
          borderRadius: "0.375rem",
          border: "none",
          background: "#f2f2f2",
          cursor: "pointer",
        }}
        onClick={onPrevPage}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span>
        {currentPage} de {totalPages}
      </span>
      <button
        style={{
          padding: "0.5rem",
          borderRadius: "0.375rem",
          border: "none",
          background: "#f2f2f2",
          cursor: "pointer",
        }}
        onClick={onNextPage}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  )
}
