import Tecnologia from './Item.jsx';
import { Tec } from './styles.js';
import tecnListData from './tecnologias.json';

function Tecnologias() {
    return (
        <Tec id="tec">
            <div className='max-conteudo'>
                <h1>Tecnologias que domino ou que pretendo estudar.</h1>
                <div className='list'>
                    {
                        tecnListData.map(function(item, index) {
                            return (
                                <Tecnologia 
                                    key={index} 
                                    image={item.image}
                                    alt={item.alt}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Tec>
    )
}

export default Tecnologias