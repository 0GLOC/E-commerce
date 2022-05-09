import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Card } from 'react-bootstrap';

import '../Item/Item.css'

const Item = ({ name, image, price, id, stock }) => {
  const onAdd = (count) => {
    alert(`Has agregado ${count} juegos`);
  };
    return (
      <article className="product-card">
          <Card>
            <Card.Img variant="top" className="product-card__image" src={image} alt="" />
            <Card.Body>
              <Card.Title className="product-card__name">{name}</Card.Title>
              <Card.Text className="product-card__price">${price}</Card.Text>
            </Card.Body>
            <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
          </Card>
      </article>
    );
  };
  
  export default Item;