import { FaShoppingBag } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { TbLocationFilled } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../Footer/Footer.css';

export default function Footer() {
    return (
      <>
        <footer className="footer">
          <div className="container-footer">
            <div className="contact-company">
            <Link to="/">
              <div className="name-company">
                  <FaShoppingBag className="icon-cc" />
                  <h2>E-Commerce Shop</h2>
              </div>
            </Link>
              <div className="desc-company">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. aque reiciendis inveiste ratione ex alias quis</p>
              </div>
              
              <div className='social-media-footer'>
                <Link to="https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/" target='_blank'>
                  <div className="icon-sm">
                    <FaLinkedin />
                  </div></Link>
                <Link to="https://github.com/misaelalves99" target='_blank'>
                  <div className="icon-sm">
                    <FaGithub />
                  </div>
                </Link>
                <Link to="https://www.instagram.com/misael_alves_99/" target='_blank'>
                  <div className="icon-sm">
                    <FaInstagram />
                  </div>
                </Link>
                <Link to="https://www.facebook.com/misael.alves.92317/" target='_blank'>
                  <div className="icon-sm">
                    <FaFacebook />
                  </div>
                </Link>
              </div>
              <div className='contact-location'>
                <div className="location-f">
                  <div className='icon-cl'><TbLocationFilled /></div>
                  <h3>Teófilo Otoni-MG</h3>
                </div>
                <div className="contact-f">
                  <div className='icon-cl'><FaPhoneVolume /></div>
                  <h3>(33) 99941-6186</h3>
                </div>
              </div>
            </div>

            <div className="about-us-service">
              <div className="about-us">
                <h1>Sobre nós</h1>
                <ul>
                  <Link><li>Carreiras</li></Link>
                  <Link><li>Nossas histórias</li></Link>
                  <Link><li>Termos e Condições</li></Link>
                  <Link><li>Política de Privacidade</li></Link>
                </ul>
              </div>
              <div className="service">
                <h1>Atendimento</h1>
                <ul>
                  <Link><li>Central de ajuda</li></Link>
                  <Link><li>Como comprar</li></Link>
                  <Link><li>Acompanhe seu pedido</li></Link>
                  <Link><li>Devoluções</li></Link>
                </ul>
              </div>
            </div>

            <div className="our-app">
              <h1>Nosso Aplicativo</h1>
              <div className="apps">
                <Link>
                  <div className="app">
                    <FaAppStoreIos className="icon-app" />
                    <h3>App Store</h3>
                  </div>
                </Link>
                <Link>
                  <div className="app">
                    <FaGooglePlay className="icon-app" />
                    <h3>Play Store</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="copyright">
            <div className="container-copyright">
              <p>&copy; 2024 E-Commerce Shop. Todos os direitos reservados.</p>
              <p>Desenvolvido por <Link to="https://misael-alves-portfolio.vercel.app/" target="_blank">Misael Alves</Link></p>
            </div>
          </div>
        </footer>
      </>
    );
}