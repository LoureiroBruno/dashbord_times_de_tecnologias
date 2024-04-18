import './CampoTexto.css'

/** criado a função */
const CampoTexto = (props) => 
{

    /** criado a função que ao mudar no input*/
    const aoDigitado = (evento) => 
    {
        props.aoAlterado(evento.target.value)
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
