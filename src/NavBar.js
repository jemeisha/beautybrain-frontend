import mainLogo from './images/logo.png'
import AboutUs from './AboutUs'
import App from './App'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar bg-[#2f2d2a] text-[#F9E5D0]">
            <Link to={"/"} className="btn btn-ghost normal-case text-xl">BeautyBrain</Link>
            
            <Link to={"/about"} className='ml-auto mr-3'>About Us</Link>
            <Link to={"/contact"} className='ml-3'>Contact Us</Link>
            
        </div>
    )
}
export default NavBar