import "./index.css"
import { Link } from "react-router-dom"
import {useState} from "react"

const Navbar = ({isHome}) => {
    
    return ( 
        <nav className="navbar">
            <h1>Blog Up!</h1>
            <div className="links">
                {!isHome && <Link to="/">Home</Link>}
                <Link className="create"to="/create" style={{
                    color: "white",
                    backgroundColor: "rgba(41,127,253,255)",
                    borderRadius: "8px"
                    
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;