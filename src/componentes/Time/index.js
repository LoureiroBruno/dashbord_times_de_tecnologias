import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'
import { Tooltip } from 'react-tippy';

/** criado a função */
const Time = (props) => 
{
    return ( /** return JSX */
        props.colaboradores.length > 0 ? <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.time.cor, '0.6') }} > 
            <Tooltip className="input-cor" title="Alterar a cor" position="left" trigger="mouseenter">
                <input type='color' className='input-cor' value={props.time.cor} onChange={evento => { props.mudarCor(evento.target.value, props.time.id)  }} />
            </Tooltip>
            <h3 style={{ borderColor: props.time.cor }}>{props.time.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( (colaborador, indice) =>  {
                    return (
                        <Colaborador 
                            key={indice} 
                            id={colaborador.id}
                            favorito={colaborador.favorito}
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            corDeFundo={props.cor} 
                            aoDeletar={props.aoDeletar}
                            aoFavoritar={props.aoFavoritar}
                        /> 
                    )
                })}
            </div>
        </section> : ''
    )
}

/** exportado a função */
export default Time
