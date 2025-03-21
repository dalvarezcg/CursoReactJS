import "./NewMessage.css"

function NewMessage() {
    return (
        <div className="newMessage">
            <form onsubmit="addMessage();">
                <input type="text" className="newMessage input" placeholder="Escribe tu mensaje..." />
                <button type="submit" className="newMessage button"><i class="bi bi-send-fill"></i></button>
            </form>
        </div>
    )
}

export default NewMessage