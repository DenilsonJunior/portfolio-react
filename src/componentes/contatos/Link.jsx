function Link(props) {
    return (
        <a key={props.image} className={props.classAnima} href={props.href} target="_blank" rel="noopener noreferrer">
            <div className='box'>
                <img src={`/assets/img/`+props.image+`.png`} alt="" />
            </div>
            <p>{props.text}</p>
        </a>
    )
}

export default Link