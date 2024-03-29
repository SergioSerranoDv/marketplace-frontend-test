export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()

    if (data.status === "error") {
      return {
        status: "error",
        message: data.message,
      }
    }
    return {
      message: data.message,
      status: data.status,
      token: data.data.token,
      user: data.data.user,
    }
  } catch (error) {
    return {
      code: 500,
      status: "error",
      message: "Error al iniciar sesión",
    }
  }
}
export const register = async (email: string, password: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    if (data.status === "error") {
      return {
        status: "error",
        message: data.message,
      }
    }
    return {
      message: data.message,
      status: data.status,
      token: data.data.token,
      user: data.data.user,
    }
  } catch (error) {
    return {
      code: 500,
      status: "error",
      message: "Error al crear la cuenta",
    }
  }
}
