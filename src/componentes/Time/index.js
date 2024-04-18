import Colaborador from '../Colaborador'
import './Time.css'

/** criado a função */
const Time = (props) => 
{
    const cssPrimaria = { borderColor: props.corPrimaria } /** recebendo cor por parametro */
    const cssSecundaria = { backgroundColor: props.corSecundaria }  /** recebendo cor por parametro */

    return ( /** return JSX */
       (props.colaboradores.length > 0) ? <section className='time' style={ cssSecundaria }> 
            <h3 style={ cssPrimaria }>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador =>  <Colaborador corDeFundo={ cssPrimaria } key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} /> )}
           </div>
        </section> : ''
    )
}

/** exportado a função */
export default Time
