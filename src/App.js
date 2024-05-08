/** importado os compontes - cada componente realiza a exportação */
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react'
import Rodape from "./componentes/Rodape";
import Time from './componentes/Time';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

function App() 
{

  /** lista de exibidos por tipo de time  */

  const [times, setTimes] = useState ([
    {
      id: uuidv4(),
      nome: 'Back-End',
      cor: '#57C278',  
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Sciense',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D86EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FEBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29', 
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI 11',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[6].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial);
  const [confirmarCard, setConfirmarCard] = useState(false);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    mensagemAlertaCriarCard(colaborador); /** alerta mensagem */
  }
  
  const mensagemAlertaCriarCard = (colaborador) => 
  {
    // console.log(colaborador);
    Swal.fire({
      title: "Deseja criar o card?",
      text: "Será adicionado um novo card ao colaborador(a). ",
      icon: "question",
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) /** se confirmar chama o setColaboradores */
      {
        setColaboradores([...colaboradores, colaborador]);
        Swal.fire({
          position: "center",
          title: "Sucesso!",
          text: "Adicionado card com sucesso.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        setConfirmarCard(true)
      }
    });
    setConfirmarCard(false)
  }

  function cadastrarTime(novoTime) {
    /** alerta mensagem */
    mensagemAlertaCriarTime(novoTime); 
  }

  const mensagemAlertaCriarTime = (novoTime) => 
  {
    Swal.fire({
      title: "Deseja criar o time",
      text: "Será adicionado o novo time à opções de times. ",
      icon: "question",
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
    }).then((result) => {
      /** se confirmar chama o setColaboradores */
      if (result.isConfirmed) 
      {
        setTimes([...times, { ...novoTime, id: uuidv4() } ])
        Swal.fire({
          position: "center",
          title: "Sucesso!",
          text: "Adicionado time com sucesso.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        setConfirmarCard(true)
      }
    });
    setConfirmarCard(false)
  }

  const deletarColaborador = (id) => { 
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
        /** se o nome do time selecionado for o mesmo nome de um dos times, deve setar com a nova cor definida para essa identificação de nome de cor */
        if(time.id === id) { 
            time.cor = cor;
        }
        return time;
    }));
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
        if(colaborador.id === id) {
            colaborador.favorito = !colaborador.favorito;
        }
        return colaborador;
    }));
  }

  return (
    <div className="App">
      <Banner /> 
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
        confirmarCard={confirmarCard} 
      /> 
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time 
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime} 
            key={indice} 
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} /** se o time no selected for igual ao time definido no const times  */
            aoDeletar={deletarColaborador}
          />
          
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;

