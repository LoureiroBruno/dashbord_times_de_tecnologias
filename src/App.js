/** importado os compontes - cada componente realiza a exportação */
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react'
import Time from './componentes/Time';
import Swal from 'sweetalert2';

function App() 
{

  /** lista de exibidos por tipo de time  */

  const times = [
    {
      nome: 'Back-End',
      corPrimaria: '#d1941bf7',  
      corSecundaria: '#fffaf0f7', 
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Data Sciense',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8',
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#D86EBF',
        corSecundaria: '#FAE5F5',
    },
    {
        nome: 'Mobile',
        corPrimaria: '#FEBA05',
        corSecundaria: '#FFF5D9',
    },
    {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF',
    }
  ]


  const [colaboradores, setColaboradores] = useState([]);
  const [confirmarCard, setConfirmarCard] = useState(false);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    mensagemAlerta(colaborador); 
  }
  
  const mensagemAlerta = (colaborador) => 
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
          position: "top-end",
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

  return (
    <div className="App">
      <Banner /> 
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} confirmarCard={confirmarCard}/> 
      {times.map(time => 
        <Time 
          key={time.nome} 
          nome={time.nome} 
          value={time.nome}
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} /** se o time no selected for igual ao time definido no const times  */
        />
      )}
    </div>
  );
}

export default App;



