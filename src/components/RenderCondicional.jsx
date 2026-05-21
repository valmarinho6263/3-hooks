

const RenderCondicional = ({user}) => {
    // se houver usuario, mostrar boas vindas, 
    // se nao mostrar , nao ha ususario logado
  return (
    <div>{user && <h1> Bem-vindo de volta, {user}</h1>}</div>
  )
}

export default RenderCondicional



