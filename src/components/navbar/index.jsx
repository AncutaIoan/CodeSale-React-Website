import React,{useContext,useState} from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandlogo";
import { Button } from "../button";
import { Marginer } from "../marginer";
import {Menu} from "./menu";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import {AccountContext} from "../accountBox/context.js"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};

`;
const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;



const AnchorLink = styled.a`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;
  &:hover {
    filter: contrast(0.6);
  }
`;
const Separtor = styled.div`
  min-height : 40%;
  width : 1px;
  background-color : #fff;
`;


export function Navbar(props) {

  const { useTransparent } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

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
    const logout = async () => {
    await signOut(auth);
  };
  let menu;





   
  

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
        <Menu />
        
    </NavbarContainer>
  );
}