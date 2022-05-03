import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import AddCart from '../AddCart/AddCart';
import '../ItemCount/ItemCount.css'


const ItemCount = ({initialValue = 1}) => {
    let [count, setCount] = useState(initialValue);
  
    function sumar(){
      setCount(count + 1);
        if (count>= 20){
        alert('No hay stock disponible')
        setCount(20);
        };
    };
  
    function restar(){
      setCount(count - 1);
      if (count<= 1){
          console.log('Cantidad incorrecta')
          setCount(1);
      };
    };
  
    return (
      <div>
        <h2 className='product'>Nombre del producto</h2>
        <ButtonGroup aria-label="Basic example">
            <Button variant="danger" onClick={(restar)}>-</Button>
            <p className='NumeroContador'>{count}</p>
            <Button variant="success" onClick={(sumar)}>+</Button>
        </ButtonGroup>
        <AddCart/>
      </div>
    );
  };
  
  export default ItemCount;