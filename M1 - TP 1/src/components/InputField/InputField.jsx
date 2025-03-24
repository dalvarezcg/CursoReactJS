//tiene que recibir el label, error, type, 
import './InputField.css'

export function InputField({LabelTexto, InputPlaceHolder, InputId}) {
    return (
        <div>
            <label className='labelInputField'>{ LabelTexto }</label>
            <input type="text" className='inputField' id={InputId} placeholder= {InputPlaceHolder} />
        </div>
    )
}