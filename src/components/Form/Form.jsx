import '../Form/Form.css';
import Fade from 'react-reveal';

export default function Form() {
    return (
        <section className='section-form'>
            <Fade bottom duration={2000} distance="40px">
                <div className='container-form'>
                    <div className='container-title'>
                        <h1 className='form-title'>CONTATE-NOS</h1>
                    </div>
                    <div className='form'>
                        <form className="cont-form">
                            <div className='form-name'>
                                <label>Nome</label>
                                <input type="text" name="name" placeholder="Nome Completo" className='input-name' />
                            </div>
                            <div className='form-email'>
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Seu Email" className='input-email'/>
                            </div>
                            <div className='form-msg'>
                                <label>Mensagem</label>
                                <textarea name="msg" id="msg" placeholder="Mensagem" className='msg'></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </Fade>
        </section>
    )
}