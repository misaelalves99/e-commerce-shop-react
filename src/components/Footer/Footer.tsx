// src/components/Footer/Footer.tsx
import { FaShoppingBag, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaPhoneVolume, FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import { TbLocationFilled } from 'react-icons/tb';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.contactCompany}>
          <a href="/" className={styles.nameCompany}>
            <FaShoppingBag className={styles.iconCC} />
            <h2>E-Commerce Shop</h2>
          </a>

          <div className={styles.descCompany}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aque reiciendis inveiste ratione ex alias quis.</p>
          </div>

          <div className={styles.socialMediaFooter}>
            <a href="https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.iconSm} />
            </a>
            <a href="https://github.com/misaelalves99" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.iconSm} />
            </a>
            <a href="https://www.instagram.com/misael_alves_99/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.iconSm} />
            </a>
            <a href="https://www.facebook.com/misael.alves.92317/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.iconSm} />
            </a>
          </div>

          <div className={styles.contactLocation}>
            <div className={styles.locationF}>
              <div className={styles.iconCl}>
                <TbLocationFilled />
              </div>
              <h3>Teófilo Otoni-MG</h3>
            </div>
            <div className={styles.contactF}>
              <div className={styles.iconCl}>
                <FaPhoneVolume />
              </div>
              <h3>(33) 99941-6186</h3>
            </div>
          </div>
        </div>

        <div className={styles.aboutUsService}>
          <div className={styles.aboutUs}>
            <h1>Sobre nós</h1>
            <ul>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Nossas histórias</a></li>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
            </ul>
          </div>
          <div className={styles.service}>
            <h1>Atendimento</h1>
            <ul>
              <li><a href="#">Central de ajuda</a></li>
              <li><a href="#">Como comprar</a></li>
              <li><a href="#">Acompanhe seu pedido</a></li>
              <li><a href="#">Devoluções</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.ourApp}>
          <h1>Nosso Aplicativo</h1>
          <div className={styles.apps}>
            <a href="#" className={styles.app}>
              <FaAppStoreIos className={styles.iconApp} />
              <h3>App Store</h3>
            </a>
            <a href="#" className={styles.app}>
              <FaGooglePlay className={styles.iconApp} />
              <h3>Play Store</h3>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className={styles.containerCopyright}>
          <p>&copy; 2024 E-Commerce Shop. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{' '}
            <a href="https://misael-alves-portfolio-next.vercel.app/" target="_blank" rel="noopener noreferrer">
              Misael Alves
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
