import React from "react"
import { ModalContainer, ModalWrapper, Layer, ModalButton } from "../styles/modal"
interface ModalFormProps {
  children: React.ReactNode
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModalForm: React.FC<ModalFormProps> = ({ children, setShowModal }) => {
  return (
    <>
      <Layer></Layer>
      <ModalContainer>
        <ModalWrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <ModalButton onClick={() => setShowModal(false)}>X</ModalButton>
          </div>
          <div>{children}</div>
        </ModalWrapper>
      </ModalContainer>
    </>
  )
}
