import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../Component/Shared/Header"
import Home from "../Component/pages/Home"
import Cart from "../Component/pages/Cart"
import Login from "../Component/pages/Login"
import Register from "../Component/pages/Register"
import Menu from "../Component/pages/Menu"
import Paymentsuccess from "../Component/pages/Paymentsuccess"

const Navigation = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/monu" element={<Menu />} />
                <Route path="/paymentsuccess" element={<Paymentsuccess/>} />
            </Routes>

        </BrowserRouter>
    )
}
export default Navigation;