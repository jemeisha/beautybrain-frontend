import mainLogo from './images/logo.png'
import AboutUs from './AboutUs'
import App from './App'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar bg-[#2f2d2a] text-[#F9E5D0]">
            <Link to={"/"} className="btn btn-ghost normal-case text-xl">BeautyBrain</Link>
            
            <Link to={"/about"} className='ml-auto mr-3'>About Us</Link>
            <div className="form-control ">
                
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
        </div>
    )
}
export default NavBar