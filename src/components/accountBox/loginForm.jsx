import React, { useContext,useState } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
 
} from "firebase/auth";


export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" className="form-control" placeholder="Email address" onChange={(event) => {
            setLoginEmail(event.target.value);
          }}/>
        <Input type="password" className="form-control" placeholder="Password"  onChange={(event) => {
            setLoginPassword(event.target.value);
          }}/>
      </FormContainer>
      <MutedLink href="#">Forgot Password?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
    
<Link to="/">
      <SubmitButton type="submit" onClick={login}>  Login</SubmitButton>
</Link>
 

      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
            
        <BoldLink href="/customer/access/signup" onClick={switchToSignup}>

          sign up
        </BoldLink>
      </MutedLink>
      
    </BoxContainer>
  );
}