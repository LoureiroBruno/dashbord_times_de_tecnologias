import { Tooltip } from 'react-tippy'
import './Colaborador.css'

/** criado a função */
const Colaborador = (props) => 
{
    let enderecoGitHub = ''
    const corDeFundo = props.corDeFundo['borderColor']
    const visualizarImagem = props.imagem
    
    
    const verificaLinkDaImagem = () => 
    {
        /** verifica se o endereço da imagem contem o dominio do github */
        const enderecoDaImagem = props.imagem.includes('https://github.com/');

        if (enderecoDaImagem) {
            enderecoGitHub = props.imagem.replace('.png', '')
            return enderecoGitHub
        } 
    }

    const githubLink = verificaLinkDaImagem();
    
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <a className='link-imagem' href={visualizarImagem ? visualizarImagem : ''} target="blank">
                <Tooltip title="Ampliar imagem" position="top" trigger="mouseenter">
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
        </div>
    </div>)
}

/** exportado a função */
export default Colaborador