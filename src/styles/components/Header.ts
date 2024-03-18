import styled from "styled-components"
export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  height: 5em;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: rgb(255, 255, 255);
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgb(242, 242, 242);
`
export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5%;
`
export const Logo = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.5rem;
  font-weight: 700;
`
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline-start: 0;
  gap: 2em;
  list-style: none;
  @media (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  transition: color 0.3s ease;
  &:hover {
    color: rgb(51, 51, 51);
  }
  > a {
    position: relative;
    text-decoration: none;
    color: #292d34;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0px;
      left: 0px;
      background-color: #333;
      transform: scaleX(0);
      transform-origin: right bottom;
      transition: transform 0.3s ease;
    }
  }
`
export const WrapperProfile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5em;
  @media (max-width: 768px) {
    display: none;
  }
`
export const ButtonBurger = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #333;
  }
`
export const Button = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 9px;
  background-color: #6873ee;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #7983ff;
  }
`
