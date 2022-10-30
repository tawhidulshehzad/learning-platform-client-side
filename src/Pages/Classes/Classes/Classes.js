import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Classes = () => {
  const classes = useLoaderData();
  const { title, details, image_url, category_id } = classes;
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{title}</Card.Title>
          <Button className="mb-2" variant="primary">
            PDF
          </Button>
        </div>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">Get premium access</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Classes;
