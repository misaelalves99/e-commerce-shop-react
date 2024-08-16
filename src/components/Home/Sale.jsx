import { FaRegCreditCard, FaTags } from "react-icons/fa";
import { FaTruckFast} from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import '../Home/Sale.css';
import ImgSale from '../../assets/desc-off.png';
import Fade from 'react-reveal';

export default function Sale() {
    return (
        <>
            <section className="section-sale">
                <div className="container-sale">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="off-sale">
                            <img src={ImgSale} alt={ImgSale} />
                        </div>
                    </Fade>
                    <Fade bottom duration={2000} distance="40px">
                        <div className="info-sale">
                            <div className="title-desc">
                                <h1>Aproveite a oferta até 50% de desconto</h1>
                                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis</h2>
                            </div>
                            <div className="info-list">
                                <div className="list-i">
                                    <div className="icon-list"><FaTruckFast /></div>
                                    <h3>Entrega rápida</h3>
                                </div>
                                <div className="list-i">
                                    <div className="icon-list"><FaRegCreditCard /></div>
                                    <h3>Parcela em até 12x sem juros</h3>
                                </div>
                                <div className="list-i">
                                    <div className="icon-list"><AiFillSafetyCertificate /></div>
                                    <h3>Compra segura</h3>
                                </div>
                                <div className="list-i">
                                    <div className="icon-list"><FaTags /></div>
                                    <h3>Temos ótimas promoções</h3>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                
            </section>
        </>
    )
}