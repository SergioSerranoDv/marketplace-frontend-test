import styled from "styled-components"

export const SideBarContainer = styled.div`
  width: 376px;
  position: relative;
  top: 0;
  transform: translateX(0);
  background-color: rgba(59 101 240);
  min-height: 100vh;
  @media (max-width: 600px) {
    display: none;
  }
`
export const SideBarList = styled.ul`
  list-style: none;
  color: rgba(255, 255, 255);
  padding: 0;
  margin: 0;
  li {
    padding: 1rem 0;
    cursor: pointer;
  }
`
