function Item(props) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            <div className='card'>
                <div className='boxImage'>
                    <img src={`/assets/img/`+props.image+`.png`} alt="" />
                </div>
                <div className='boxText'>
                    <div className='description'>
                        <h4>{props.title}</h4>
                        <p>{props.text}</p>
                    </div>
                    <button>
                        <p>▷</p>
                    </button>
                </div>
            </div>
        </a>
    )
}

export default Item