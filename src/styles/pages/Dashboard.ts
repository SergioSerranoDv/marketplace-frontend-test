import styled from "styled-components"
export const Container = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: block;
  }
`
export const Main = styled.main`
  display: block;

  @media (min-width: 600px) {
    display: flex;
  }
`
export const Button = styled.button`
  background-color: rgba(59 101 240);
  border: none;
  margin-top: 1rem;
  color: rgba(255, 255, 255);
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(59, 101, 240, 0.8);
  }
`
