import React from 'react'

const NumberList = ({numbers}) => {
    // estrutura de loop - for, while
    //metodos de array - map. filter, reduce, ...
    // chaves - key
    // um identificador unico para cada elemento
  return (
    <ul>
        {numbers.map((number, index) => (
            <li key ={index}>{number}</li>   
        ))}
    </ul>
  );
};

export default NumberList;