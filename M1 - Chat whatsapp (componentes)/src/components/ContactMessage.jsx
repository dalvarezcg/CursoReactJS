import "./ContactMessage.css"

function ContactMessage({Nombre, Mensaje}) {
    return (
        <div className="contactMessage">
            <h3 className="contactMessageH3">{ Nombre}</h3>
            <p className="contactMessageP">{Mensaje}</p>
        </div>
    )
}
export default ContactMessage