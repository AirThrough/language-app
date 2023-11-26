import React from 'react'
import './assets/fonts/stylesheet.css'
import './App.css'
import AppRouter from "./router/AppRouter"
import {ToastContainer} from "react-toastify"

function App() {
  return (
      <React.Fragment>
          <AppRouter/>
          <ToastContainer />
      </React.Fragment>
  )
}

export default App
