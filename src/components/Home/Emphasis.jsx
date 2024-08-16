import '../Home/Emphasis.css';
import Fade from 'react-reveal';
import { CardProdDt } from '../../data/data'
import Card from "../Product/Card/Card";

export default function Emphasis() {
    return (
        <>
            <section className='section-emphasis'>
                <div className="container-products-emphasis">
                    <Fade bottom duration={2000} distance="40px">
                        <div className='emphasis-title'>
                            <h1>Produtos Destaque</h1>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing eli Eveniet eaque iusto recusandae corporis harum natus itaque</h2>
                        </div>
                    </Fade>
                    
                    <Fade bottom duration={2000} distance="40px">
                        <div className="emphasis-items">
                            {CardProdDt.map(product => (
                                <Card product={product}/>
                            ))}
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}