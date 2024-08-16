import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer/MainContainer";
import Footer from "../../components/Footer/Footer";
import Advertising from "../../components/Home/Advertising";
import Emphasis from "../../components/Home/Emphasis";
import Evaluated from '../../components/Home/Evaluated';
import Sale from '../../components/Home/Sale';

export default function Home() {
    return (
        <>
            <Header/>

            <MainContainer>
                <Advertising/>
                <Emphasis/>
                <Evaluated/>
                <Sale/>
            </MainContainer>

            <Footer/>
        </>
    );
}