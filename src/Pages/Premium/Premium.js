import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Premium = () => {
  const classes = useLoaderData();
  const { title, details, image_url, category_id } = classes;
  return (
    <Card>
      <h2 className="text-center" >Checkout</h2>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{title}</Card.Title>
          
        </div>
        <Card.Img className="w-25" variant="top" src={image_url} />
        <Card.Text>{details}</Card.Text>
        
      </Card.Body>
    </Card>
  );
};

export default Premium;
