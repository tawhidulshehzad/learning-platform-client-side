import React from "react";
import { Image } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ClassesSummaryCard = ({ classes }) => {
  const { title, _id, rating, total_view, author, details, image_url } =
    classes;
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between align-items-center ">
        <div className="d-flex align-items-center">
          <Image
            src={author?.img}
            className="me-3"
            rounded
            style={{ height: "50px" }}
          ></Image>
          <div>
            <p className="mb-0">{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark className="me-2"></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 100 ? (
            <p>
              {details.slice(0, 100) + "..."}{" "}
              <Link className="text-decoration-none border bg-info text-white p-1 rounded m-1 " to={`/classes/${_id}`}>Course Details</Link>{" "}
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default ClassesSummaryCard;
