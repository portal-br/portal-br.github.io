import '../static/header.css'
import logo from '../static/logo.png'

function Header(){
    return(
        <div className="container d-flex justify-content-center">
            <nav className="Logo">
                 <img className="logo" src={logo} alt="Logo" />
            </nav>
        </div>

    );
}

export default Header;
