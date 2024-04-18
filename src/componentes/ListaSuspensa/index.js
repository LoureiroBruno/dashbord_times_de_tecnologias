import './ListaSuspensa.css'

/** criado a função */
const ListaSuspensa = (props) => 
{
    return ( /** return JSX */
            <div className='lista-suspensa'>
                <label>{props.label}</label>
                <div className="lista-suspensa-fontawesome">
                    <select className="lista-suspensa-select"  onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio}  value={props.valor}>
                    <option value="" className='lista-suspensa-selected-option' disabled >Selecione o seu time</option> 
                        {props.itens.map(item => {
                            return <option key={item}>{item}</option>
                        })}
                    </select>
                    <span className="lista-suspensa-fontawesome-span">
                        {props.iconeLabel}
                    </span>
                </div>
            </div>
        )
}

/** exportado a função */
export default ListaSuspensa
