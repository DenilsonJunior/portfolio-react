import Tecnologia from './Item.jsx';
import { Tec } from './styles.js';

const tecnListData = [
    {
        image:"tecn1",
        alt:"HTML5"
    },
    {
        image:"tecn2",
        alt:"CSS3"
    },
    {
        image:"tecn3",
        alt:"JavaScript"
    },
    {
        image:"tecn4",
        alt:"Git"
    },
    {
        image:"tecn5",
        alt:"Node js"
    },
    {
        image:"tecn6",
        alt:"Less"
    },
    {
        image:"tecn7",
        alt:"React"
    },
    {
        image:"tecn8",
        alt:"JQuery"
    },
    {
        image:"tecn9",
        alt:"Sass"
    },
    {
        image:"tecn10",
        alt:"Angular"
    },
    {
        image:"tecn11",
        alt:"Pug"
    },
    {
        image:"tecn12",
        alt:"Gulp"
    },
    {
        image:"tecn13",
        alt:"Notion"
    },
    {
        image:"tecn14",
        alt:"Tailwind"
    }
]

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