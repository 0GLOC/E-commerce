import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Card } from 'react-bootstrap';

import '../ItemDetailInfo/ItemDetailInfo.css'

const Item = ({ name, image, price, id, stock, categoria }) => {
  const onAdd = (count) => {
    alert(`Has agregado ${count} juegos`);
  };
    return (
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
    );
  };
  
  export default Item;