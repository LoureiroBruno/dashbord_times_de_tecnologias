// import { useState } from 'react'
import './CampoTexto.css'



/** criado a função */
const CampoTexto = (props) => 
{
    /** hooks onde é definido o estado do valor e set(como alterar) do valor */
    //const [valor, setValor] = useState('') /** ao mudar o estado, o react renderiza novamente */

    /** criado a função que ao mudar no input*/
    const aoDigitado = (evento) => 
    {
        // setValor(evento.target.value) /** obtendo o novo valor no value e definindo no setValor */
        props.aoAlterado(evento.target.value)
        // console.log(props.valor)
    }

    return ( /** return JSX */
            <div className="campo-texto">
                <label>{props.label}</label>
                <div className="campo-texto-fontawesome">
                    <input className="campo-texto-input" required={props.obrigatorio} placeholder={props.placeholder} type={props.type} value={props.valor} 
                        onChange={aoDigitado} name={props.label.toLowerCase()} id={props.label.toLowerCase()} />
                    <span className="campo-texto-fontawesome-span">
                        {props.iconeLabel}
                    </span>
                </div>
            </div>
        )
        
}

/** exportado a função */
export default CampoTexto

//**{`Digite seu ${props.label.toLowerCase()}`} templace sting */