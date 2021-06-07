import "./Greetings.css"
function Greetings(props)
{
    return(
        <div>
        <h1 className="first">Hello {props.name}  </h1>
        <h2 className="second">And Weclome. Your age is: {props.age}</h2>
        </div>
    )
}

export default Greetings;