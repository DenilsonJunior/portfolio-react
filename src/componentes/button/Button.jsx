import { LinkPadrao, BtnPadrao } from './styles.js';

function Button(props) {
    if (props.href) {
        return (
            <LinkPadrao className={props.class} href={props.href} download={props.download}>
                <p>{props.nome}</p>
            </LinkPadrao>
        );
    } else {
        return (
            <BtnPadrao className={props.class} onClick={props.onClick}>
                <p>{props.nome}</p>
            </BtnPadrao>
        );
    }
}

export default Button