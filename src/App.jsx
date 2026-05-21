import ExemploUseEffect from "./components/ExemploUseEffect";
import Timer from "./components/Timer";
import ComponentFilho from "./components/ComponentFilho";
import{MeuContextoProvider} from"./contexts/MeuContexto";
import ValorDoContexto from "./components/ValorDoContexto";
import Contador from "./components/Contador";
import DisplayWindowSize from"./components/DisplayWindowSize";


function App(){
  return(
<>
{/*8.1 - UseEffect */}
<ExemploUseEffect/>
  <Timer/>
  {/*8.2 - UseContext */}
  {/*aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes */}
  <MeuContextoProvider>
    <ComponentFilho/>
    <ValorDoContexto/>
  </MeuContextoProvider> 
  {/*8.3 - UseReducer */}
  {/*estados mais complexos*/}
   <Contador/>
   {/*8.4 - Custom hook */}
   <DisplayWindowSize/>
</>
  )
}

export default App;
