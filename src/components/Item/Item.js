import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../Item/Item.css'

const Item = ({ name, image, price, id, stock }) => {
    return (
      <article className="product-card">
          <Card>
            <Card.Img variant="top" className="product-card__image" src={image} alt="" />
            <Card.Body>
              <Card.Title className="product-card__name">{name}</Card.Title>
              <Card.Text className="product-card__price">${price}</Card.Text>
            </Card.Body>
            <Link to={`/details/${id}`}>
            <Button variant="dark" size="lg">Detalles del producto</Button>
            </Link>
          </Card>
      </article>
    );
  };
  
  export default Item;