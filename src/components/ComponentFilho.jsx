import {useContext} from 'react';
import {MeuContexto} from"../contexts/MeuContexto";

const ComponentFilho = () => {
  const{ mensagem, setMensagem }= useContext(MeuContexto);

  return (
     <div>
      <p>{mensagem}</p>
<button onClick={() => setMensagem("Nova mensagem")}>
      Alterar mensagem
    </button>
  </div>
    );
}

export default ComponentFilho;