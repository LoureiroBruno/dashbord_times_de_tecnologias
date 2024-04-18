import './Colaborador.css'

/** criado a função */
const Colaborador = (props) => 
{
    const corDeFundo = props.corDeFundo['borderColor']
    
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={props.imagem} alt={props.nome}/>
        </div>
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>
        </div>
    </div>)
}

/** exportado a função */
export default Colaborador