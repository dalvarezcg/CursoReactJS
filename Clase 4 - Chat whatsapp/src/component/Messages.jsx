import Navegador from "./Navegador";
import UserMessage from "./UserMessage";
import ContactMessage from "./ContactMessage";
import NewMessage from "./NewMessage";
import "./Messages.css";

const messages = [
    {Nombre: "Diego Alvarez", Mensaje: "Hola hija"},
    {Nombre: "Bianca Alvarez Mikunda", Mensaje: "Hola pa!"},
    {Nombre: "Bianca Alvarez Mikunda", Mensaje: "¿Todo bien?"}
];

function Messages() {
    return (
        <div className="messages">    
            <Navegador NombreContacto={"Bianca Alvarez Mikunda"}/>
            <div className="espacio"></div>
            <UserMessage Nombre={"Diego Alvarez"} Mensaje={"Hola hija"}/>
            <div className="espacio"></div>
            <ContactMessage Nombre={"Bianca Alvarez Mikunda"} Mensaje={"Hola pa!"}/>
            <div className="espacio"></div>
            <ContactMessage Nombre={"Bianca Alvarez Mikunda"} Mensaje={"¿Todo bien?"}/>
            <div className="espacio"></div>

            
            <NewMessage /> 
            
        </div>
    )
}

export default Messages
