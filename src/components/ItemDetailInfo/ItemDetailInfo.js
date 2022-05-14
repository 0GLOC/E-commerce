import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Card } from 'react-bootstrap';

import '../ItemDetailInfo/ItemDetailInfo.css'

const Item = ({ name, image, price, id, stock, categoria, descripcion, desarrollador }) => {
  const onAdd = (count) => {
    alert(`Has agregado ${count} juegos`);
  };
    return (
      <div className='container-fluid'>
          <div>
            <article className="product-card">
                <Card className='cardDetail'>
                  <Card.Img variant="top" className="product-card__imageDetail" src={image} alt="" />
                  <Card.Body>
                    <Card.Title className="product-card__nameDetail">{name}</Card.Title>
                    <Card.Text className="product-card__priceDetail">${price}</Card.Text>
                  </Card.Body>
                  <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
                </Card>
            </article>
          </div>
          <div>
            <div className='descripcion'>
              <h1 className='titleGame'>{name}</h1>
              <h3>{descripcion}</h3>
              <h4 className='desarrolladorGame'>{desarrollador}</h4>
            </div>
          </div>
        </div>
    );
  };
  
  export default Item;