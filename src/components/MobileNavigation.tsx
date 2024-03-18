import React from "react"
import { Button } from "../styles/modal"
import { ModalForm } from "./ModalForm"
import { RegisterForm } from "./RegisterForm"
import { closeSession } from "../services/Session_s"
import dashboardIcon from "../assets/icons/dashboard.svg"
import teamIcon from "../assets/icons/team.svg"
import homeIcon from "../assets/icons/ecommerce.svg"
import ticketIcon from "../assets/icons/ticket.svg"
import downArrowIcon from "../assets/icons/down_arrow.svg"
import {
  MobileNavigationContainer,
  MobileNavigationList,
  MobileNavigationItem,
} from "../styles/components/MobileNavigation"

interface MobileNavigationProps {
  isOPenMobileNav: boolean
}
export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOPenMobileNav }) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const [isOpenDashboard, setIsOpenDashboard] = React.useState<boolean>(false)
  return (
    <>
      <MobileNavigationContainer className={isOPenMobileNav ? "active" : ""}>
        <div>
          {localStorage.getItem("email") ? (
            <div
              style={{
                backgroundColor: "rgba(255,255,255)",
                paddingBottom: "1rem",
              }}
            >
              <div
                style={{
                  color: "rgba(59, 101, 240)",
                  padding: "1rem",
                }}
              >
                Bienvenido
              </div>
              <span
                style={{
                  color: "rgba(51,51,51)",
                  padding: "1rem",
                }}
              >
                {localStorage.getItem("email")}
              </span>
            </div>
          ) : (
            <Button
              style={{
                backgroundColor: "rgba(255,255,255)",
                marginTop: "1rem",
                color: "rgba(59, 101, 240)",
                padding: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(59, 101, 240)",
              }}
              onClick={() => setIsModalOpen(true)}
            >
              Iniciar sesión
            </Button>
          )}
        </div>
        <MobileNavigationList>
          <MobileNavigationItem>
            <img
              width={20}
              height={20}
              src={homeIcon}
              alt="Home"
              style={{
                marginRight: "8px",
              }}
            />
            <a href="/">Inicio</a>
          </MobileNavigationItem>
          <MobileNavigationItem>
            <img
              width={20}
              height={20}
              src={ticketIcon}
              alt="Products"
              style={{
                marginRight: "8px",
              }}
            />
            <a href="/#">Productos</a>
          </MobileNavigationItem>
          <MobileNavigationItem>
            <img
              width={20}
              height={20}
              src={teamIcon}
              alt="About us"
              style={{
                marginRight: "8px",
              }}
            />
            <a href="/#">Nosotros</a>
          </MobileNavigationItem>
          {localStorage.getItem("token") && (
            <div>
              <MobileNavigationItem>
                <img
                  width={20}
                  height={20}
                  src={dashboardIcon}
                  alt="Dashboard"
                  style={{
                    marginRight: "8px",
                  }}
                />
                <a href="/Dashboard">Dashboard</a>
                <button
                  style={{
                    marginLeft: "2rem",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  onClick={() => setIsOpenDashboard(!isOpenDashboard)}
                >
                  <img src={downArrowIcon} width={20} alt="" />
                </button>
              </MobileNavigationItem>
              {isOpenDashboard && (
                <MobileNavigationList
                  style={{
                    backgroundColor: "rgba(255,255,255, 0.1)",
                    borderRadius: "0.5rem",
                  }}
                >
                  <MobileNavigationItem>
                    <a href="/dashboard/">Mis Productos</a>
                  </MobileNavigationItem>
                  <MobileNavigationItem>
                    {localStorage.getItem("role")?.includes("admin") && (
                      <a href="/Dashboard/admin-products">Todos los Productos</a>
                    )}
                  </MobileNavigationItem>
                </MobileNavigationList>
              )}
            </div>
          )}
        </MobileNavigationList>

        {localStorage.getItem("token") && (
          <div
            style={{
              position: "absolute",
              bottom: "100px",
              width: "100%",
              left: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Button
              style={{
                backgroundColor: "rgba(255,255,255)",
                marginTop: "1rem",
                color: "rgba(59, 101, 240)",
                padding: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(59, 101, 240)",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onClick={() => {
                closeSession()
              }}
            >
              Cerrar sesión
            </Button>
          </div>
        )}
      </MobileNavigationContainer>
      {isModalOpen && (
        <ModalForm showModal={isModalOpen} setShowModal={setIsModalOpen}>
          <RegisterForm setIsModalOpen={setIsModalOpen} />
        </ModalForm>
      )}
    </>
  )
}
