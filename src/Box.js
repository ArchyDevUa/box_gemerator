function Box(props){
    return(
        <div style={{
            width:`${props.width}px`,
            height:`${props.height}px`,
            border:"3px solid black",
            margin:"10px auto",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>Block</div>
    )
}

export default Box;