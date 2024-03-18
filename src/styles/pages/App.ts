import styled from "styled-components"
export const Container = styled.div`
  display: block;
`
export const FiltersContainer = styled.div<{ $openFilters: boolean }>`
  display: block;
  width: 25%;
  float: left;
  @media (max-width: 1024px) {
    position: fixed;
    display: ${(props) => (props.$openFilters ? "block" : "none")};
    top: 100px;
    right: 0;
    width: 300px;
    float: none;
    z-index: 100;
    background-color: #fff;

    &:before {
      content: "";
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
  }
`
export const FilterWrapper = styled.div`
  position: relative;
  z-index: 100;
  margin-right: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-weight: 500;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  font-size: 18px;
  background-color: #5f48ea;
  color: rgb(255, 255, 255);
  @media (min-width: 600px) {
    > button {
      display: none;
    }
  }
`
export const FilterContent = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  padding: 1rem 2rem;
  > label {
    text-align: left;
    color: #333;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  > input {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    &:focus {
      outline: none;
      border: 1px solid rgb(30, 64, 175);
    }
  }
`
export const GridProducts = styled.div`
  width: 75%;
  float: right;
  min-height: 300px;
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 1rem;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 601px) and (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }
`
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 15px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  > img {
    width: 250px;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`
export const ProductButton = styled.button`
  padding: 0.8rem;
  width: 90%;
  border: none;
  border-radius: 9px;
  background-color: #5f48ea;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #4c3ab4;a
  }
`
