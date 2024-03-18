import React, { useState } from "react"
import { Link } from "react-router-dom"
import { RegisterForm } from "./RegisterForm"
import { ModalForm } from "./ModalForm"
import Cart from "./Cart"
import { Dropdown } from "./Dropdown"
import { MobileNavigation } from "./MobileNavigation"

import {
  ButtonBurger,
  HeaderContainer,
  HeaderNavigation,
  NavList,
  Button,
  Logo,
  NavItem,
  WrapperProfile,
} from "../styles/components/Header"

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isOPenMobileNav, setIsOpenMobileNav] = useState<boolean>(false)
  return (
    <>
      <HeaderContainer>
        <HeaderNavigation>
          <Logo href="/">
            <span
              style={{
                color: "#5f48ea",
              }}
            >
              LAX
            </span>
            STORE
          </Logo>
          <NavList>
            <NavItem>
              <Link to="/">Inicio</Link>
            </NavItem>
            <NavItem>
              <Link to="/#">Productos</Link>
            </NavItem>
            <NavItem>
              <Link to="/#">Nosotros</Link>
            </NavItem>
          </NavList>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <Cart />
            <WrapperProfile>
              <span>{localStorage.getItem("email") && localStorage.getItem("email")}</span>
              {localStorage.getItem("token") ? (
                <Dropdown />
              ) : (
                <Button
                  onClick={() => {
                    setIsModalOpen(true)
                  }}
                >
                  Inciar Sesión
                </Button>
              )}
            </WrapperProfile>
            <ButtonBurger
              onClick={() => {
                setIsOpenMobileNav(!isOPenMobileNav)
              }}
            >
              <svg
                className="w-6 h-6 text-black cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </ButtonBurger>
          </div>
        </HeaderNavigation>
        {isModalOpen && (
          <ModalForm showModal={isModalOpen} setShowModal={setIsModalOpen}>
            <RegisterForm setIsModalOpen={setIsModalOpen} />
          </ModalForm>
        )}
        <MobileNavigation isOPenMobileNav={isOPenMobileNav} />
      </HeaderContainer>
    </>
  )
}

export default Header
