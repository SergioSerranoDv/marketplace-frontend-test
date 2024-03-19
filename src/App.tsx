import React from "react"
import { Index } from "./pages/Index"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AdminProducts } from "./pages/AdminProducts"
import { Dashboard } from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import "./App.css"

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="seller">
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/dashboard/admin-products"
          element={
            <ProtectedRoute role="admin">
              <AdminProducts />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
