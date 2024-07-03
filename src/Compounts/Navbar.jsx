import React from 'react'
import './Navbar.css'
import{Link} from "react-router-dom"

const Navbar = () => {
    return (
        <>
           <nav className='navbar bg-dark'>
            <div className="container">
                <img src="src/assets/logo.png" className="logo"alt="logo" />
                <ul className='navbar-nav'>
                <li className='nav-item'> <Link to="/">Home</Link></li>

                    <li className='nav-item'> <Link to="/About.jsx">About</Link></li>
                    <li className='nav-item'> <Link to="/Class.jsx">Class</Link></li>
                    <li className='nav-item'> <Link to="/Team.jsx">Team</Link></li>
                    <li className='nav-item'> <Link to="/Price.jsx">Price</Link></li>
                    <li className='nav-item'> <Link to="/Text.jsx">Brand</Link></li>
                    <li className='nav-item'> <Link to="/Blog.jsx">Blog</Link></li>
                    <li className='nav-item1'> <Link to="/Conduct.jsx">Conduct</Link></li>
                    <li className='nav-item'><button className='  btn btn-danger btn1'><Link to="/Login.jsx">Login</Link></button></li>
                    <li className='nav-item'><button className='btn btn-danger btn2'>Register</button></li>
                     

                </ul>
            </div>
           </nav>
        </>
    )
}

export default Navbar


// <nav className="navbar navbar bg-bark">
// <div className="container ">
  
//         <img src="src/assets/logo.png" alt="logo" className='logo' />
    
//     <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//             <li className="nav-item">
//                home
//             </li>
//             <li className="nav-item">
//                about
//             </li>
//             <li className="nav-item">
//                 conduct
//             </li>
           
//         </ul>
//     </div>
// </div>
// </nav>