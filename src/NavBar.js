import mainLogo from './images/logo.png'

function NavBar() {
    return (
        <div className="navbar bg-base-100">
            <a className="btn btn-ghost normal-case text-xl">BeautyBrain</a>
            <div className="form-control ml-auto">
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
        </div>
    )
}
export default NavBar