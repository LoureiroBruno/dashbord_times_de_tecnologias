import './Botao.css'

/** criado a função */
const Botao = (props) => 
{
    return ( /** return JSX */
                <button className='botao'>{props.children}</button>
        )
}

/** exportado a função */
export default Botao

