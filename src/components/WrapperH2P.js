function WrapperH2P(props) {
    return(
        <div>
            <p className="h2-like">{props.h2Text}</p>
            <p className="description">{props.pText}</p>
        </div>
    )
}

export default WrapperH2P