import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductCard = (props) => {
  const { item } = props;
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.category.title}</Card.Text>
        <Card.Text>Author: {item.author}</Card.Text>
        <Button variant="primary">Delete</Button>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
