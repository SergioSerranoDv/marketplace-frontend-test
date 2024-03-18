export const closeSession = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("email")
  localStorage.removeItem("role")
  window.location.href = "/"
}

export const startSession = (token: string, email: string, role: string) => {
  localStorage.setItem("token", token)
  localStorage.setItem("email", email)
  localStorage.setItem("role", role)
}
