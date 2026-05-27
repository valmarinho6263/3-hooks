import ExemploUseEffect from "./components/ExemploUseEffect";
import Timer from "./components/Timer";
import ComponentFilho from "./components/ComponentFilho";
import{MeuContextoProvider} from"./contexts/MeuContexto";
import ValorDoContexto from "./components/ValorDoContexto";
import Contador from "./components/Contador";
import DisplayWindowSize from"./components/DisplayWindowSize";
import Container from "./components/Container";
import PerfilDeUsuario  from "./components/PerfilDeUsuario";
import CalculoPesado from "./components/CalculoPesado";
import ContadorCallback from "./components/ContadorCallback";
import Exercises from "./components/Exercises";



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
   {/*8.5 - Slots e children props */}
   <Container>
    <h1>Titulo da seçao</h1>
    <p>Este é  o meu subtitulo</p>
    <Contador/>
    </Container>
    {/*8.6 - Sincronizar o estado com props */}
    {/*props => componente => chamada de API => resulta em um dado */}
    <PerfilDeUsuario usuarioId={1} />
    <p>Valmarinho6263@gmail.com</p>
    <PerfilDeUsuario usuarioId={2} />
    <p>valmarinhoprodutos@gmail.com</p>
     {/*8.7 - useMemo e useCallback */}
     <CalculoPesado numero = {5}/>
     <ContadorCallback/>
      {/*8.8 - Exercícios */}
     <Exercises />
     </>
  );
}

export default App;
