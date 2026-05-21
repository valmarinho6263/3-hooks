import {useEffect,useState} from 'react';


const ExemploUseEffect = () => {
    const[contador, setContador]=useState(0);


    //executar algo, baseado em algo
    //mudança de um valor, carregamento da pagina
    useEffect(() => {
    document.title = 'Voce clicou ${contador} vezes';
    });

  return <div>
    <p>Voce clicou {contador} vezes</p>
    <button onClick={()=>setContador(contador + 1)}>Clique aqui</button>
    </div>;
  
}

export default ExemploUseEffect