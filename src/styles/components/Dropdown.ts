import { Link } from "react-router-dom"
import styled from "styled-components"
export const DropdownContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  top: 50px;
  background-color: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e0e0e0;
`
export const DropdownList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  li {
    padding: 0.5rem 0;
    cursor: pointer;
  }
`
export const ButtonLogout = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #668fef;
  }
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  transition: 0.3s;
  &:hover {
    color: #668fef;
  }
`
