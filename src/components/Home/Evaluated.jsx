import '../Home/Evaluated.css';
import { CardProducts } from '../../data/data';
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../Product/Card";

export default function Evaluated() {
    const carouselRef = useRef(null);
    const visibleCards = 4; // Quantidade de cards visíveis ao mesmo tempo
    const cardWidth = 300; // Largura de um card (ajuste para corresponder ao seu design)
    const scrollByAmount = visibleCards * cardWidth; // Calcula o deslocamento total com base nos cards visíveis

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const maxScrollLeft = 
                carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
            
            if (carouselRef.current.scrollLeft + scrollByAmount <= maxScrollLeft) {
                carouselRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
            } else {
                carouselRef.current.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
            }
        }
    };

    return (
        <section className='section-evaluated'>
            <div className="container-products-evaluated">
                <div className='evaluated-title'>
                    <h1>Produtos Avaliados</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque iusto recusandae corporis harum natus itaque</h2>
                </div>
                <div className="carousel-container">
                    <button className="scroll-btn left" onClick={scrollLeft}>
                        <FaArrowLeft />
                    </button>
                    <div className="carousel" ref={carouselRef}>
                        {CardProducts.map((product, index) => (
                            <div key={index} className="carousel-card" style={{ flex: `0 0 calc(${100 / visibleCards}% - 16px)` }}>
                                <Card product={product} key={product.id} />
                            </div>
                        ))}
                    </div>
                    <button className="scroll-btn right" onClick={scrollRight}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
