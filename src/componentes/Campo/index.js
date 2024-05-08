import './Campo.css'



/** criado a função */
const Campo = (props) => 
{
    /** criado a função que ao mudar no input*/
    const aoDigitado = (evento) => 
    {
        props.aoAlterado(evento.target.value)
    }

    let valor = '#000000';

    if (props.type === 'text') {
        valor = props.valor
    }

    return ( /** return JSX */
            <div className={`campo campo-${props.type}`}>
                <label>{props.label}</label>
                <div className="campo-fontawesome">
                    <input 
                        type={props.type} 
                        value={props.valor ? props.valor : valor}
                        onChange={aoDigitado} 
                        className="campo-input" 
                        required={props.obrigatorio} 
                        placeholder={props.placeholder}   
                        name={props.label.toLowerCase()} 
                        id={props.label.toLowerCase()} 
                    />
                    <span className="campo-fontawesome-span">
                        {props.iconeLabel}
                    </span>
                </div>
            </div>
        )
        
}

/** exportado a função */
export default Campo

/**{`Digite seu ${props.label.toLowerCase()}`} templace sting */
/** hooks onde é definido o estado do valor e set(como alterar) do valor */
/** const [valor, setValor] = useState('') /** ao mudar o estado, o react renderiza novamente */
/** setValor(evento.target.value) /** obtendo o novo valor no value e definindo no setValor */