import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import '../ItemCount/ItemCount.css'



const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const addProduct = (num) => {
      setCount(count + num);
    };

    return (
      <div>
        <ButtonGroup aria-label="Basic example">
            <Button variant="danger" onClick={() => addProduct(-1)} disabled={count === initial ? true : null}>-</Button>
            <p className='NumeroContador'>{count}</p>
            <Button variant="success" onClick={() => addProduct(+1)} disabled={count === stock ? true : null && alert}>+</Button>
        </ButtonGroup>
        <div>
           <div className="d-grid gap-2">
                <Button variant="dark" size="lg" onClick={() => onAdd(count)} disabled={stock === 0 ? true : null}>Agregar al Carrito</Button>
            </div> 
        </div>
      </div>
    );
  };
  
  export default ItemCount;