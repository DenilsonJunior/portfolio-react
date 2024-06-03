import { Tecnologia } from './styles.js';

function Item(props) {
    return (
        <Tecnologia>
            <img src={`src/assets/img/`+props.image+`.png`} alt={props.alt} />
        </Tecnologia>
    )
}

export default Item