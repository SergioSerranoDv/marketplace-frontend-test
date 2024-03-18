import React, { useContext } from "react"
import { ProductForm } from "./ProductForm"
import { ButtonActions } from "../styles/components/Actions"
import { ApiContext } from "../context/ApiContext"
import closeIcon from "../assets/icons/close.svg"
import updateIcon from "../assets/icons/update.svg"
import { ApiProps, ApiResponse } from "../context/ApiContext"
import { Product } from "../interfaces/Product"
import { ModalForm } from "./ModalForm"

interface ActionsProps {
  id: string
  deleteAction: (
    backendApiCall: (requestData: ApiProps) => Promise<ApiResponse>,
    id: string
  ) => Promise<ApiResponse>
  refetch?: React.Dispatch<React.SetStateAction<number>>
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  product: Product
}

export const Actions: React.FC<ActionsProps> = ({ id, deleteAction, refetch, product }) => {
  const { backendApicall } = useContext(ApiContext)
  const [openModal, setOpenModal] = React.useState<boolean>(false)

  return (
    <div>
      <ButtonActions
        onClick={async () => {
          const response = await deleteAction(backendApicall, id)
          if (response.status === "success") {
            alert(response.message)
            refetch && refetch((prev) => prev + 1)
            return
          }
          alert(response.message)
        }}
      >
        <img src={closeIcon} width={20} height={20} alt="Delete Action" />
      </ButtonActions>
      <ButtonActions onClick={() => setOpenModal(!openModal)}>
        <img src={updateIcon} width={20} height={20} alt="Update Action" />
      </ButtonActions>

      {openModal && (
        <ModalForm showModal={openModal} setShowModal={setOpenModal}>
          <ProductForm
            type="update"
            product={product}
            setShowModal={setOpenModal}
            refetch={refetch}
          />
        </ModalForm>
      )}
    </div>
  )
}
