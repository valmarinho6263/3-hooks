import {useState}from 'react'

//Ecercicio 1

const Greeting  = ({name}) => {
  return <h1>Olá,{name}!</h1>;
  };

  // Exercicio 2
  const Counter =() =>{
    const [count, setCount] = useState(0)
    return(
        <div>
            <p>Voce Clicou{count}vezes no botao </p>
            <button onClick= {() => setCount(count + 1)} >Clique em mim </button>
            <button onClick= {() => setCount(count - 1)} >Decrementar </button>
        </div>
    );
  };

  //Exercicio 3
  const TaskList = ({tasks})=>
    {
  if(tasks.length === 0) {
    return <p> Nao há tarefas para mostrar </p>
  }
  return (
    <ul>
    {tasks.map((task) => (
    <li key={task.id}>{task.text}</li>
    ))}
      </ul>
    )
    }

  function Exercicio  () {
    //Dados de exemplo para o componente TaskList
    const  tasks = [
      {id: 1, text : "Comprar Leite" },
      {id: 2, text : "Estudar React" },
    ];
     return(
        <div>
            <h2>Exercicio 1</h2>
            <Greeting name = "Joao"/>
            <h2>Exercico 2</h2>
            <Counter/>
            <h2>Exercicio 3</h2>
            <TaskList tasks={tasks} />
        </div>
    )
  }
    

export default Exercicio;