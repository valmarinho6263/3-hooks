 import {useState} from 'react'
 
 const Form = () => {

    const[value, setValue] = useState("")

    const handleSubmit = (event) => {
        //manipulacao de dados
        //validaçao
        // envio ao servidor pela API
        //loading
        // chamada da função de mensagens de erro/bem sucedido
        event.preventDefaut() 

        console.log("Formulario enviado;",value);
    }
   return (
     <form onSubmit = {handleSubmit}>
       <input
        type="text" 
       value={value} 
       onChange={(e) => setValue(e.target.value)} 
       placeholder="Preencher o campo"   
    />
    <button type = "submit"> Enviar</button>
     </form>
   );
 }
 
 export default Form;

