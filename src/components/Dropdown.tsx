import React, { useState } from "react"
import { closeSession } from "../services/Session_s"
import {
  DropdownContainer,
  DropdownList,
  ButtonLogout,
  LinkStyled,
} from "../styles/components/Dropdown"
import userProfileIcon from "../assets/icons/user_profile.svg"

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img width={30} height={30} src={userProfileIcon} alt="User Icon" />

        {isOpen && (
          <DropdownContainer>
            <DropdownList>
              <LinkStyled to="/dashboard">Dashboard</LinkStyled>
              <ButtonLogout
                onClick={() => {
                  closeSession()
                }}
              >
                Log out
              </ButtonLogout>
            </DropdownList>
          </DropdownContainer>
        )}
      </div>
    </>
  )
}
