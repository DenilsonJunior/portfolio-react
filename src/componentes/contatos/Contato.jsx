import Link from './Link.jsx';
import { Contatos } from './styles.js';
import ListContatos from './contatos.json'

function Contato() {
    return (
        <Contatos id="cont">
            <div className='max-conteudo'>
                <h1>Contatos</h1>
                <div className='list'>
                    {
                        ListContatos.map(function(item, index) {
                            return (
                                <Link
                                    key={index} 
                                    href={item.href}
                                    image={item.image}
                                    text={item.text}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Contatos>
    )
}

export default Contato