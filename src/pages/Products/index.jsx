import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer/MainContainer";
import Footer from "../../components/Footer/Footer"; 
import Product from '../../components/Product';

export default function Products() {
    return (
        <>
            <Header/>

            <MainContainer>
                <Product/>
            </MainContainer>

            <Footer/>
        </>
    );
}