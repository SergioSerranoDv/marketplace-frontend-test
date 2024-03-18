import styled from "styled-components"

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 0.5rem 0.875rem;
  font-size: 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid rgb(59 130 246);
`
export const CartWrapperContent = styled.div`
  position: absolute;
  top: 100%;
  padding-top: 0.5rem;
  width: 350px;
  right: 0;
  background-color: rgb(255, 255, 255);
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 0 10px 0px #0000001a;
  @media (max-width: 600px) {
    width: 300px;
  }
`

export const CloseButton = styled.button`
  text-align: right;
  background: "rgb(255,255,255)";
  padding: 0.2rem 0.4rem;
  border: none;
  border-radius: 0.25rem;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
    background-color: #f1f1f1;
  }
`
