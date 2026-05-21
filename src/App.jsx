import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect';
import Timer from "./components/Timer";
import ComponentFilho from './components/ComponentFilho';
import {MeuContextoProvider} from"./contexts/MeuContexto";
import ValorDoContexto from './components/ValorDoContexto';
import Contador from './components/Contador';
import DisplayWinddowSize from './components/DisplayWindowSize';
import Container from './components/Container';
 
function App() {
  return ( 
  <>
    {/* 8.1 useEffect*/} 
    <ExemploUseEffect/>
    <Timer/>
    {/* 8.2 useContext*/} 
    {/*aplicações de pequeno e médio porte, que precisam transferirno estado entre componentes */} 
    <MeuContextoProvider>
      <ComponentFilho/>
      <ValorDoContexto/>
    </MeuContextoProvider>
 {/* 8.3 useReducer*/} 
 {/*estados mais complexos */} 
    <Contador/>
   {/* 8.4 Custom hook*/}   
   <DisplayWinddowSize/>
   {/* 8.5 Slots e children props*/} 
   <Container/>
   <container>
<h1>Titulo da seção</h1>
<p>Este é o meu subtítulo</p>
   </container>

    </>
  );
};


export default App;
 