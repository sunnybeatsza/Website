import React from "react";
import { Card } from "react-bootstrap";

function ProductCard(props) {
  return (
    <Card style={{ width: "18rem", height: "auto" }} className="mx-2 my-2">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <p>Color : {props.color}</p>
        <p>Price: R{props.price}.00</p>
        <button className="btn btn-primary my-2">Buy</button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
