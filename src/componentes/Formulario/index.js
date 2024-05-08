import React, { useState, useEffect } from 'react';
import Campo from '../Campo';
import './Formulario.css';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { v4 as uuidv4 } from 'uuid';


const Formulario = (props) => {

  /** hooks onde é definido o estado do nome, cargo e imagem e set(como alterar) do nome, cargo e imagem */
  /** ao mudar o estado, o react renderiza novamente */
  const [nome, setNome] = useState('')  
  const [cargo, setCargo] = useState('')  
  const [imagem, setImagem] = useState('')  
  const [time, setTime] = useState('')  
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')

  /** Limpar os campos quando confirmarCard */
  useEffect(() => {
    if (props.confirmarCard) {
      setNome('');
      setCargo('');
      setImagem('');
      setTime('');
      setNomeTime('');
      setCorTime('');
    }
  }, [props.confirmarCard]);

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({ 
      id: uuidv4(),
      nome, 
      cargo, 
      imagem, 
      time 
    });
  };

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    props.cadastrarTime({ 
      nome: nomeTime, 
      cor: corTime
    });
  };

  return (
    <section className="formulario-container">

      <form  className="formulario" onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador(a).</h2>
        <Campo
          obrigatorio={true}
          iconeLabel={<i className="fas fa-user"></i>}
          label="Nome"
          placeholder="Informe o seu nome e sobrenome"
          type="text"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />

        <Campo
          obrigatorio={true}
          iconeLabel={<i className="fas fa-network-wired"></i>}
          label="Cargo"
          placeholder="Informe o seu cargo"
          type="text"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />

        <Tooltip title="https://github.com/profile.png" position="bottom" trigger="mouseenter">
          <Campo
            label="Imagem"
            iconeLabel={<i className="fas fa-image"></i>}
            placeholder="Informe o seu endereço da imagem"
            type="text"
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
          />
        </Tooltip>

        <ListaSuspensa
          label="Time"
          iconeLabel={<i className="fas fa-people-group"></i>}
          obrigatorio={true}
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />

        <Tooltip title="Clique para criar o card" position="right" trigger="mouseenter">
          <Botao>
            <i className="fa-solid fa-address-card"></i> Criar Card
          </Botao>
        </Tooltip>
      </form>

      <form  className="formulario"  onSubmit={ (evento) => { aoSubmeter(evento) } }>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio
          iconeLabel={<i className="fa-solid fa-people-group"></i>}
          label="Nome"
          placeholder="Informe o nome do seu time"
          type="text"
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />

        <Campo
          obrigatorio
          iconeLabel={<i className="fa-solid fa-palette"></i>}
          label="Cor"
          placeholder="Informe a cor do time"
          type="color"
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
        />

        <Tooltip title="Clique para criar um novo time" position="right" trigger="mouseenter">
          <Botao>
          <i className="fa-solid fa-users-viewfinder"></i> Criar Time 
          </Botao>
        </Tooltip>
      </form>

    </section>
  );
};
/** exportado a função */
export default Formulario;


/** indice prop da variavel nome e o valor dela dentro da variavel
 * 
 *  props.aoColaboradorCadastrado({ 
      id: uuidv4(),
      nome, 
      cargo, 
      imagem, 
      time 
    });
 */