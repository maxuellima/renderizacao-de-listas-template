import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

const listaDeTarefas = [];
export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");

  const [lista, setLista] = useState(listaDeTarefas);

  // const [lista, setLista] = useState([
  //   {
  //     id: 1,
  //     nome: "Bulbassauro",
  //     tipo: "Planta",
  //   },
  //   {
  //     id: 2,
  //     nome: "Ivyssauro",
  //     tipo: "Planta",
  //   },
  //   {
  //     id: 3,
  //     nome: "Venussauro",
  //     tipo: "Veneno",
  //   },
  // ]);

  // const pokemonMapeados = lista.map((pokemon) => {
  //   <li>
  //     <p> {pokemon.id}</p>
  //     <p> {pokemon.nome}</p>
  //     <p> {pokemon.tipo}</p>
  //   </li>;
  // });

  // const listaMapeada = lista.map((item)=>{
  //   return (
  //     <Tarefa>
  //           <p>{item}</p>
  //           <RemoveButton>
  //             <img src={bin} alt="" width="16px" />
  //           </RemoveButton>
  //         </Tarefa>
  //   )

  // })

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa]
    setLista(novaLista)
    setNovaTarefa("")
  };

  const removeTarefa = (valor) => {
    const filtroRemover = lista.filter((item)=>(item !== valor))
    setLista(filtroRemover)
  };


  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {/* {listaMapeada} */}
          {/* <Tarefa>
            <p>Nova tarefa</p>
            <RemoveButton>
              <img src={bin} alt="" width="16px" />
            </RemoveButton>
          </Tarefa> */}
          {lista.map((item) => {
            return (
              <Tarefa key={item}>
                <p>{item}</p>
                <RemoveButton onClick={()=>removeTarefa(item)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
      
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
