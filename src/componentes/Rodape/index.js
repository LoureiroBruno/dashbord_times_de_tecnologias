
import './Rodape.css'

import { FaInstagram, FaTwitter} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <FaFacebook size={30} /> 
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <FaTwitter size={30} /> 
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                <FaInstagram size={30} />  
                </a>
            </li>
        </ul>
       </section>
       <section>
            <img src="/imagens/logo.png" alt="" />
       </section>
       <section>

       </section>
    </footer>)
}

export default Rodape