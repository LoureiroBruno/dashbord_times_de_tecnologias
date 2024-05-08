import { Tooltip } from 'react-tippy'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css'

/** criado a função */
const Colaborador = (props) => 
{
    let enderecoGitHub = ''
    const visualizarImagem = props.imagem
    
    function favoritar() {
        props.aoFavoritar(props.id)
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }
    
    const verificaLinkDaImagem = () => 
    {
        /** verifica se o endereço da imagem contem o dominio do github */
        const enderecoDaImagem = props.imagem.includes('https://github.com/');

        if (enderecoDaImagem) {
            enderecoGitHub = props.imagem.replace('.png', '')
            return enderecoGitHub
        } else {
            return props.imagem
        }
    }

    const githubLink = verificaLinkDaImagem();
    
    return (<div className='colaborador'>
        <Tooltip className="deletar" title="Remover o card" position="top" trigger="mouseenter">
            <AiFillCloseCircle 
                size={30} 
                className="deletar" 
                onClick={ () => {
                        props.aoDeletar(props.id)
                    }
                } 
            />
        </Tooltip>
        <div className='cabecalho' style={{ backgroundColor: props.corDeFundo }}>
            <a className='link-imagem' href={visualizarImagem ? visualizarImagem : ''} target="blank">
                <Tooltip title="Ampliar imagem" position="right" trigger="mouseenter">
                    <img src={props.imagem ? props.imagem : '/imagens/padrao.png'} alt={props.nome}/>
                </Tooltip>
            </a>
        </div>
        <div className='rodape'>
            <a className='link-imagem' href={githubLink} target="blank" >
                <Tooltip title={githubLink ? 'Visualizar no GitHub' : null} position="top" trigger="mouseenter">
                    <h4>{props.nome}</h4>
                </Tooltip>
            </a>
            <h5>{props.cargo}</h5>
            <div className='favoritar'>
                {props.favorito
                    /** passando as propriedades para o componente da forma de objeto uso do (spread (...)) */
                    ? <AiFillHeart  {...propsfavorito} color='red' /> 
                    : <AiOutlineHeart  {...propsfavorito} />
                }
            </div>
        </div>
    </div>)
}

/** exportado a função */
export default Colaborador