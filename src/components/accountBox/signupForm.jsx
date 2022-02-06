import React, { SyntheticEvent, useState,useContext } from "react";
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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" className="form-control" placeholder="Email address"   onChange={(event) => {
            setRegisterEmail(event.target.value);
          }} />
        <Input type="password" className="form-control" placeholder="Password"    onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}/>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <Link to="/">
      <SubmitButton onClick={register} type="submit"> Singup</SubmitButton>
      </Link>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
             
        <BoldLink href="/customer/access/signin" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}