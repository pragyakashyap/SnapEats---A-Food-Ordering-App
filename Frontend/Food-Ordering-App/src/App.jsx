import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Login, Register} from "./pages"


function App() {
  

  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
