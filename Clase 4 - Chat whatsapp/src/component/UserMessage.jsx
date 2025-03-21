import "./UserMessage.css"

function UserMessage({Nombre, Mensaje}) {
    return (
        <div className="userMessage">
            <h3 className="userMessageH3"> {Nombre}</h3>
            <p className="userMessageP">{Mensaje}</p>
        </div>
    )
}
export default UserMessage  