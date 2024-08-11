import { Link } from "react-router-dom"
import "../Styles/Navbar.css"
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { useContext, useState } from "react";
import { UserContext } from "../../Context/AppContext";
const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    const {setCategory}=useContext(UserContext)
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen)
    }
    return (
        <div className="Container-fluid  nav-custom">

            <div className=" icon-custom" onClick={toggleMenu}>
                <ViewHeadlineIcon />
            </div>
            <div className="me-auto navbar-head-custom  ">
                <h1 className="nav-heading-custom">Headline HUB</h1>
            </div>
            <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
                <ul className="d-flex nav-ul-custom ">
                    {/* <li className="px-3 nav-list-custom" onClick={()=>setCategory(true)}><Link to="/">Home</Link></li> */}
                    <li className="px-3 nav-list-custom"onClick={()=>setCategory(true)}><Link to="/">General</Link></li>

                    <li className="px-3 nav-list-custom"onClick={()=>setCategory(true)}><Link to="/business">Business</Link></li>

                    <li className="px-3 nav-list-custom"onClick={()=>setCategory(true)}><Link to="/entertainment">Entertainment</Link></li>
                    <li className="px-3 nav-list-custom"onClick={()=>setCategory(true)}><Link to="/health">Health</Link></li>

                    <li className="px-3 nav-list-custom"onClick={()=>setCategory(true)}><Link to="/sports">Sports</Link></li>

                    <li className="px-3 nav-list-custom"onClick={()=>setCategory(true)}><Link to="/stocks">Stocks</Link></li>

                    <li className="px-3 nav-list-custom"onClick={()=>setCategory(true)}><Link to="/technology">Technology</Link></li>


                </ul>
            </div>

        </div>
    )
}

export default Navbar