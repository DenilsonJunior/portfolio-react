import { LinkPadrao, BtnPadrao } from './styles.js';

function Button(props) {
    if (props.href) {
        return (
            <LinkPadrao href={props.href} download={props.download}>
                <p>{props.nome}</p>
            </LinkPadrao>
        );
    } else {
        return (
            <BtnPadrao onClick={props.onClick}>
                <p>{props.nome}</p>
            </BtnPadrao>
        );
    }
}

export default Button