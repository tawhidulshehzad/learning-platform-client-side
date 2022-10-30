import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const AutoLogin = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("sei");
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} variant="outline-primary">
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
