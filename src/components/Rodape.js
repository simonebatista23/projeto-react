import { Link } from "react-router-dom";
import './footer.css';


const Rodape = () => {
    return (


        <div className="container-footer">



            <footer className="footer" id="contact">
                <h4>FILMES FAVORITOS</h4>


                <div class="menu">
                    <ul>
                        <li>  <Link to="/">Home</Link></li>
                        <li>   <Link to="/contato">Contact</Link></li>
                        <li> <Link to="/sobre">About</Link></li>
                        <li>  <Link to="/indicacoes">indications</Link></li>
                    </ul>
                </div>
            </footer>






        </div>
    )

}

export default Rodape;