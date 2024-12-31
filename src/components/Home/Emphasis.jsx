import '../Home/Emphasis.css';
import { CardProducts } from '../../data/data';
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../Product/Card";

export default function Emphasis() {
    const carouselRef = useRef(null);
    const scrollByAmount = 300; // Quantidade de deslocamento por clique
    const visibleCards = 4; // Quantidade de cards visíveis ao mesmo tempo

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const maxScrollLeft = 
                carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
            
            // Verifica para evitar scroll extra ao final
            if (carouselRef.current.scrollLeft + scrollByAmount <= maxScrollLeft) {
                carouselRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
            } else {
                carouselRef.current.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
            }
        }
    };

    return (
        <section className='section-emphasis'>
            <div className="container-products-emphasis">
                <div className='emphasis-title'>
                    <h1>Produtos Destaque</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque iusto recusandae corporis harum natus itaque</h2>
                </div>
                <div className="carousel-container">
                    <button className="scroll-btn left" onClick={scrollLeft}>
                        <FaArrowLeft />
                    </button>
                    <div className="carousel" ref={carouselRef}>
                        {CardProducts.map((product, index) => (
                            <div key={index} className="carousel-card">
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
