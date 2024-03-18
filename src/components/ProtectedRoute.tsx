import React, { useEffect, PropsWithChildren, useContext } from "react"
import { closeSession } from "../services/Session_s"
import { ApiContext } from "../context/ApiContext"

export interface ProtectedRouteAdminProps {
  role: string
}
const ProtectedRouteAdmin: React.FC<PropsWithChildren & ProtectedRouteAdminProps> = ({
  role,
  ...props
}) => {
  const { isAuthenticated, setIsAuthenticated, backendApicall } = useContext(ApiContext)

  // verify if user is authenticated and redirect to login if not for protected routes
  useEffect(() => {
    const handleAuthentication = async () => {
      try {
        if (!localStorage.getItem("token")) {
          return setIsAuthenticated(false)
        }
        const response = await backendApicall({
          endpoint: "auth/verifyTokenApi",
          method: "GET",
        })
        if (response.message === "Authorized" && response.data.role.includes(role)) {
          setIsAuthenticated(true)
          localStorage.setItem("email", response.data.email)
          localStorage.setItem("role", JSON.stringify(response.data.role))
        } else {
          setIsAuthenticated(false)
          closeSession()
        }
      } catch (error) {
        console.error("Error verifying token:", error)
      }
    }
    handleAuthentication()
  }, [isAuthenticated])

  if (isAuthenticated) {
    return <div>{props.children}</div>
  }
  return null
}
export default ProtectedRouteAdmin
