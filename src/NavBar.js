import mainLogo from './images/logo.png'
import AboutUs from './AboutUs'
import App from './App'

function NavBar() {
    return (
        <div className="navbar bg-[#2f2d2a] text-[#F9E5D0]">
            <a href={App} className="btn btn-ghost normal-case text-xl">BeautyBrain</a>
            <a href={AboutUs} >About Us</a>
            <div className="form-control ml-auto">
                
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
        </div>
    )
}
export default NavBar