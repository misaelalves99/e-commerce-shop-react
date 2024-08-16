import '../Home/Evaluated.css';
import Fade from 'react-reveal';
import { CardProdAv } from '../../data/data'
import Card from "../Product/Card/Card";

export default function Evaluated() {
    return (
        <>
            <section className='section-evaluated'>
                <div className="container-products-evaluated">
                    <Fade bottom duration={2000} distance="40px">
                        <div className='evaluated-title'>
                            <h1>Produtos Avaliados</h1>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing eli Eveniet eaque iusto recusandae corporis harum natus itaque</h2>
                        </div>
                    </Fade>
                    
                    <Fade bottom duration={2000} distance="40px">
                        <div className="evaluated-items">
                            {CardProdAv.map(product => (
                                <Card product={product}/>
                            ))}
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}