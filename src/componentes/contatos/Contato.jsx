import { Contatos } from './styles.js';

function Contato() {
    return (
        <Contatos>
            <div className='max-conteudo'>
                <h1>Contatos</h1>
                <div className='list'>
                    <a className='card' href="http://" target="_blank" rel="noopener noreferrer">
                        <div className='box'>
                            <img src="src/assets/img/cont01.png" alt="" />
                        </div>
                        <p>E-mail</p>
                    </a>
                    <div className='card'>
                        <div className='box'>
                            <img src="src/assets/img/cont02.png" alt="" />
                        </div>
                        <p>Whatsapp</p>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src="src/assets/img/cont03.png" alt="" />
                        </div>
                        <p>Linkedin</p>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src="src/assets/img/cont04.png" alt="" />
                        </div>
                        <p>GitHub</p>
                    </div>
                </div>
            </div>
        </Contatos>
    )
}

export default Contato