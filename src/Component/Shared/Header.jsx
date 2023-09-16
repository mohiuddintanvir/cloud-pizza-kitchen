import { Link } from "react-router-dom"
import foody from "../../Asset/Images/foody.png"
import { AiOutlineShoppingCart } from "react-icons/ai";




export const Header = () => {
    return (
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={foody} alt="logo" className="w-20 h-20 object-cover" />
                    </Link>

                </div>
                <div className="nav-manu-wrapper flex items-center  justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="#About" className="text-xl">About</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link to="/cart"><AiOutlineShoppingCart/></Link>
                    <Link to="/login">LogIn</Link>
                    <Link to="/register">signup</Link>
                </div>
            </div>
        </nav>
    )
}