import '../Home/Advertising.css';
// import Fade from 'react-reveal';
import Typical from 'react-typical';
import ImgProp from '../../assets/img-propaganda.png';

export default function Advertising() {
    return (
        <>
            <section className='section-advertising'>
                <div className='container-advertising'>
                    {/* <Fade bottom duration={2000} distance="40px"> */}
                        <div className='advertising'>
                            <h1>até 50% de desconto e com muitas promoções.</h1>
                            <br />
                            <h1 className='typical'>
                                <Typical 
                                    loop={Infinity} 
                                    steps={[
                                        'Preço Baixo!',
                                        3000,
                                        'Aproveite!',
                                        3000,
                                        'Compre Agora!',
                                        3000,
                                    ]}
                                />
                            </h1>
                        </div>
                        <div className='img-advertising'>
                            <img src={ImgProp} alt={ImgProp} />
                        </div>
                    {/* </Fade> */}
                </div>
            </section>
        </>
    )
}