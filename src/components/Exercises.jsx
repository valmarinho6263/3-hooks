import { useEffect, useMemo, useState } from 'react'

//Exercicio 1
const UserInfo = ({userInfo}) => {
    useEffect(() => {
    document.title = '$( userInfo.name) - $( userInfo.jobTitle)'
}, [userInfo])
     return (
    <div>
    <h1> Nome: {userInfo.name}</h1>
    <p>Profissão: {userInfo.jobTitle}</p>
    </div>
    )
}
//Exercicio 2
const fibonacci = (n) => {
    if(n<=1){
        return n
    }
    return fibonacci(n -1) + fibonacci (n - 2);
}
    const FibCalculator = ({ num }) => {
    const fibResult = useMemo (() => fibonacci (num),  (num));
    return (
    <div>
    <p>
        Fibonacci de {num}é {fibResult}
    </p>
    </div>
    );
};
const useOnlineStatus = () => {
const [isOnline, setIsOnline] = useState(navigator.online);
useEffect(()=> {
const handleOnline = ()=> setIsOnline(true)
const handleOffline = ()=> setIsOnline(false)
window.addEventListener("online", handleOnline);
window.addEventListener("offline", handleOffline);

//limpeza de memoria
return () => {
    window.removeEventListener("online", handleOnline);
    window.removeEventListener("offline", handleOffline);
};
}, []);
return isOnline;
};
const OnlineStatusIndicator =()=>{
    const isOnline = useOnlineStatus();
    return (<div>
        <p>Você está atualmente :{isOnline ? "Online": "Offline" }</p>
    </div>
    );
};

       const Exercises = () => {
const userInfo = {name: "Val Marinho" , jobTitle: "Desenvolvedora"}
  return (
  <div>
        <h2>Exercicio 1</h2>
        <UserInfo userInfo={userInfo}/>
        <h2>Exercio 2</h2>
        <FibCalculator num={5} />
        <h2>Exercicio 3</h2>
        <OnlineStatusIndicator/>
        </div>
);
};

export default Exercises;