import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Classes = () => {
  const classes = useLoaderData();
  const { title, details, image_url, _id } = classes;
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{title}</Card.Title>
          <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => <button onClick={toPdf}>Pdf file</button>}
            </Pdf>
            {/* <div className="d-lg-none" ref={ref}>
              <h1>{title}</h1>
              <p>{details}</p>
            </div> */}
          </div>
        </div>
        <Card.Img variant="top" src={image_url} />
        <Card.Text ref={ref}>{details}</Card.Text>
        <Link
          className="text-decoration-none bg-info rounded-2 px-3 py-2 fs-4  text-white "
          to={`/premium/${_id}`}
        >
          Get premium access
        </Link>{" "}
      </Card.Body>
    </Card>
  );
};

export default Classes;
