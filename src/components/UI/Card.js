const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>   // content in between the opening and closing tag is passed in via props.children
}

export default Card;