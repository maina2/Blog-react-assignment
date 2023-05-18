import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import {FaMicroblog} from "react-icons/fa"
import "./header.css"


function Header() {
  return (
    <div className="header">
      <Link  to='./' >< FaHome /> Home</Link><FaMicroblog/>
      <Link to='./blog2' >One</Link><FaMicroblog/>
      <Link to='./blog3' >Two</Link><FaMicroblog/>
      <Link to='./blog4' >Three</Link><FaMicroblog/>
      <Link to='./blog5' >Four</Link><FaMicroblog/>



      
    


    </div>
  )
}

export default Header