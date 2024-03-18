import React, { useState } from "react"
import { Form, Input, Label, Button } from "../styles/modal"
import { WrapperInput } from "../styles/modal"
import { login, register } from "../services/Auth_s"
import { startSession } from "../services/Session_s"
import padlockIcon from "../assets/icons/padlock.svg"
import emailIcon from "../assets/icons/email.svg"

interface RegisterFormProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const RegisterForm: React.FC<RegisterFormProps> = ({ setIsModalOpen }) => {
  const [haveAccount, setHaveAccount] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  const handleAuthentication = async (
    e: React.FormEvent<HTMLFormElement>,
    authenticationType: "login" | "register"
  ) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    if (!email) return setError("Debes ingresar un correo")
    if (!password) return setError("Debes ingresar una contraseña")
    try {
      let response
      if (authenticationType === "login") {
        response = await login(email, password)
      } else {
        const passwordConfirmation = formData.get("confirmPassword") as string
        if (!passwordConfirmation) {
          setError("Debes confirmar tu contraseña")
          return
        }
        if (password !== passwordConfirmation) {
          setError("Las contraseñas no coinciden")
          return
        }
        response = await register(email, password)
      }
      if (response.status === "success") {
        startSession(response.token, response.user.email, JSON.stringify(response.user.roles))
        setError("")
        form.reset()
        setIsModalOpen(false)
      } else {
        setError(response.message)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <>
      <h2>{haveAccount ? "Iniciar sesión" : "Registrarse"}</h2>
      <Form onSubmit={(e) => handleAuthentication(e, haveAccount ? "login" : "register")}>
        {haveAccount ? (
          <>
            <WrapperInput>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
              />
              <div
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "55%",
                }}
              >
                <img src={emailIcon} width={20} height={20} alt="Add your email" />
              </div>
            </WrapperInput>
            <WrapperInput>
              <Label htmlFor="password">Contraseña</Label>
              <Input type="password" placeholder="Ingresa tu contraseña" name="password" />
              <div
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "55%",
                }}
              >
                <img src={padlockIcon} width={20} height={20} alt="Add your password" />
              </div>
            </WrapperInput>
            {error && (
              <p
                style={{
                  color: "red",
                  fontSize: "0.8rem",
                  textAlign: "start",
                  margin: "0",
                }}
              >
                {error}
              </p>
            )}
          </>
        ) : (
          <>
            <WrapperInput>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
              />
              <div
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "55%",
                }}
              >
                <img src={emailIcon} width={20} height={20} alt="Add your email" />
              </div>
            </WrapperInput>

            <WrapperInput>
              <Label htmlFor="password">Contraseña</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Ingresa una contraseña"
              />
              <div
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "55%",
                }}
              >
                <img src={padlockIcon} width={20} height={20} alt="Add your password" />
              </div>
            </WrapperInput>
            <WrapperInput>
              <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Ingresa tu contraseña nuevamente"
              />
              <div
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "55%",
                }}
              >
                <img src={padlockIcon} width={20} height={20} alt="Add your password" />
              </div>
            </WrapperInput>
            {error && (
              <p
                style={{
                  color: "red",
                  fontSize: "0.8rem",
                  textAlign: "start",
                  margin: "0",
                }}
              >
                {error}
              </p>
            )}
          </>
        )}
        <Button type="submit">{haveAccount ? "Iniciar sesión" : "Registrarse"}</Button>
        {
          <a
            href="#"
            style={{
              fontSize: "1rem",
              color: "#333",
              textDecoration: "none",
            }}
            onClick={(e) => {
              e.preventDefault()
              setHaveAccount(!haveAccount)
              setError("")
            }}
          >
            {haveAccount ? "Regístrate" : "Inicia sesión"}
          </a>
        }
      </Form>
    </>
  )
}
