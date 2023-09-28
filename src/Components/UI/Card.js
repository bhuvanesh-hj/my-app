import "./Card.css"
const Card = (props) => {
    const classes = 'card '+props.className;
    return(
        <div className={classes}>{props.children}</div>//children is the content of the opening and closing custom tag
    )
}

export default Card;