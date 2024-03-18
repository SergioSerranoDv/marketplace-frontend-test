import React from "react"
import { SideBarContainer, SideBarList } from "../styles/components/SideBar"
export const SideBar = () => {
  return (
    <SideBarContainer>
      <div
        style={{
          padding: "2rem",
        }}
      >
        <SideBarList>
          <li>
            <a
              href="/dashboard"
              style={{
                color: "rgb(255,255,255)",
                textDecoration: "none",
              }}
            >
              Mis Productos
            </a>
          </li>
          <li>
            {localStorage.getItem("role")?.includes("admin") && (
              <a
                href="/dashboard/admin-products"
                style={{
                  color: "rgb(255,255,255)",
                  textDecoration: "none",
                }}
              >
                Todos los productos
              </a>
            )}
          </li>
        </SideBarList>
      </div>
    </SideBarContainer>
  )
}
