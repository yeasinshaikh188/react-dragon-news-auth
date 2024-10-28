import { Link, NavLink } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

function Navbar() {
  
  // useContext 
  const {user, logOut} = useContext(AuthContext); 

  // handlSignOut 
  const handleSignOut = () =>{
    logOut()
    .then(result =>{
      console.log(result.user)
    })
    .catch()
  }

    // navLink 
    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/career'>Career</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    </>

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLinks}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost mr-2 btn-circle avatar"> 
        <FaUserCircle className="text-4xl"></FaUserCircle>
      </div>


      {/* login button and log out button  */}
      {
        user ?<button onClick={handleSignOut} className="btn bg-[#403F3F] text-white text-xl hover:bg-[#403F3F] rounded-none px-6">Log Out</button> 
        :<Link to='/login'><button  className="btn bg-[#403F3F] text-white text-xl hover:bg-[#403F3F] rounded-none px-6">Login</button></Link>
      }

  </div>
</div>
  )
}

export default Navbar