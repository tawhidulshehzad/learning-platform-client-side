import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const AutoLogin = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-success">Login with Google</Button>
        <Button variant="outline-success">Login with GitHub</Button>
      </ButtonGroup>
    </div>
  );
};

export default AutoLogin;
