import "./Navegador.css"; 

function Navegador({NombreContacto}){
    return (
        <div className="navegador">
            <span><i class="bi bi-person-fill contacto"></i>       {NombreContacto}</span>
        </div>
    )
}
export default Navegador