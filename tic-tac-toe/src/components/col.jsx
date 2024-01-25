function Col(props){
    return (
        <div
        onClick={props.onClick}
         style={{
            border:"1px solid",
            height: "200px",
            width: "100%",
            display: "flex",
        alignItems:"center",
    justifyContent: "center",
    fontSize:"4rem"
}}
         className="bcol">
            <h5>{props.value}</h5>
        </div>
    )
}

export default Col;