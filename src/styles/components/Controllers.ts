import styled from "styled-components"
export const WrapperControllers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 102px;
  height: 32px;
  border: 1px solid rgb(239, 213, 219);
  border-radius: 6px;
  margin-top: 0.5rem;
  overflow: hidden;
`
export const InputController = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  font-size: 0.8rem;
  outline: none;
`
export const ButtonController = styled.button`
  display: flex;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgb(229, 231, 235);
  }
`
