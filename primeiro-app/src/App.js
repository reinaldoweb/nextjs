import { useState } from "react";


function App(){
  const [input, setInput] = useState("");
  const [tarefa, setTarefa] = useState([
  'Pagar conta de luz',
  'Estudar React',
  ]);




  function handleRegister(e){

  e.preventDefault();

  setTarefa([...tarefa, input]);
  setInput("");



  }

  return (
    <div>
    <h1>Cadastrando usuário</h1>
  <form onSubmit={handleRegister}>
      <label>Nome da Tarefa</label><br/>
      <input
      type="text"
      name="nome"
      placeholder="Digite uma tarefa"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Registrar</button>
  </form>

  <div>
  <h2>Lista de Tarefas</h2>

  {/* //Criar uma Lista */}

<ul>

  {tarefa.map((item) => (
     <li key={item}>{item}</li>
  ))}

  </ul>


  </div>
    </div>
  );
  }
  export default App;

