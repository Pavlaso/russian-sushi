import { Route, Routes } from "react-router-dom";
import  Header  from "./components/header";
import { Cart } from "./pages/cart"
import { Home } from "./pages/home"

export const  App = () => {
  return(
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/cart"  element={<Cart />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  ) 
}

