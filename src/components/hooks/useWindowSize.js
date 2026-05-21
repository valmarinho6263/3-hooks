import{useState, useEffect} from "react";

export default function useWindowSize(){
    const [windoSize, setWindowSize] = useState({
        width: window. innertWidth,
        height: window.innerHeight,
    });
    
   useEffect(() =>{
    //Função que altera os valores

    function handleResize(){
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight,
        });
    }

    //Evento que dispara a função
window.addEventListener("resize", handleResize)

handleResize()
//Limpeza de memoria
return()=> window.removeEventListener("resize", handleResize);
},[]);

return windoSize;
}  