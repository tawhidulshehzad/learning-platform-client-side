import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGithub, FaGoogle } from "react-icons/fa";

const AutoLogin = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary">
          {" "}
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-primary">
          {" "}
          <FaGithub /> Login with GitHub
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default AutoLogin;
