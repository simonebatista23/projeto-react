import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
    return (


        <div className="container-navbar">
            <header className="header">
                <div className="header-container">

                    <h1>FILMES FAVORITOS</h1>


                    <nav>
                        <input type="checkbox" id="menu-hamburguer" />

                        <label for="menu-hamburguer">
                            <div className="menu">
                                <span className="hamburguer"> </span>
                            </div>
                        </label>

                        <ul>
                            <li>  <Link to="/">Home</Link></li>
                            <li>   <Link to="/contato">Contact</Link></li>
                            <li> <Link to="/sobre">About</Link></li>
                            <li>  <Link to="/indicacoes">indications</Link></li>
                            <li>  <Link to="/Form"> comments</Link></li>

                        </ul>
                    </nav>
                </div>
            </header>



        </div>
    )

}

export default Navbar;