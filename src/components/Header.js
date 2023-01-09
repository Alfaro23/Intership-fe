import { Link, NavLink, Outlet } from "react-router-dom"

const Header = () => {

    return(
        <header className="header">
            <h1 className='header__title'>
                <Link to="/article">SHARETRADE.COM</Link>
            </h1>
        </header> 
    )
}

export default Header;