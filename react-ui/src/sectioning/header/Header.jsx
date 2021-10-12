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
                            <i className="fas fa-home"></i>
                                Valley Ghoul
                            </NavLink>
                            <NavLink to="/products">
                            <i className="fas fa-ghost"></i>
                                Products
                            </NavLink>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="cart navs">
                            <NavLink to="/cart">
                            <i className="fas fa-shopping-cart"></i>
                                Cart
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;