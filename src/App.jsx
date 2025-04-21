import React from 'react'

import LoginForm from "./components/LoginForm/LoginForm"
import SignUp from "./components/SignupForm/SignUp"

import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUp />} />

      </Routes>


    </BrowserRouter>


  )
}
