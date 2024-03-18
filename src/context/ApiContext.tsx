import React, { createContext, useState, PropsWithChildren } from "react"

interface ApiContextProps {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  backendApicall: (requestData: ApiProps) => Promise<ApiResponse>
}
export interface ApiProps {
  endpoint: string
  method: string
  body?: {}
}
export interface ApiResponse {
  status: string
  message: string
  data: any
}

export const ApiContext = createContext<ApiContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  backendApicall: async () => ({} as ApiResponse),
})
const backendApicall = async (requestData: ApiProps): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${requestData.endpoint}`, {
      method: requestData.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(requestData.body),
    })
    const data = await response.json()
    return {
      status: data.status,
      message: data.message,
      data: data.data,
    }
  } catch (error) {
    return {
      status: "error",
      message: "Internal Server Error",
      data: null,
    }
  }
}
export const ApiContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  return (
    <ApiContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        backendApicall,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  )
}

export default ApiContextProvider
