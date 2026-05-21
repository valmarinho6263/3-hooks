const Descricao = (props) => {

//props = {}
//propriedades => chave dos valores
//props.nome = "Val"
return (
<div>
  <p>Meu nome é: {props.nome}</p>  
  <p> E tenho sonhos: {props.sonhos} </p>
</div>
);

};
export default Descricao;
