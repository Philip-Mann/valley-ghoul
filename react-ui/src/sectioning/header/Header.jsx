import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {

    return(
        <nav className="nav-wrapper">
            <div className="nav-container">
                <div className="nav-contents">
                    <div className="nav-left">
                        <div className="home navs">
                            <NavLink to="/">
                                Valley Ghoul
                            </NavLink>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="about navs">
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;