import React,{useState} from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Marginer } from "../marginer";

import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";


const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;


const UserProfile = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "15px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 900;
  margin-left: 6px;
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

const Button1 = styled.button`
border: none;
  outline: none;
  color: #fff;
  padding: 6px 1em;
  font-size: ${({ size }) => (size ? size + "px" : "11px")};
  font-weight: 600;
  border-radius: 3px;
  background-color: #2a9d8f;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background-color: #21867a;
  }
  &:focus {
    outline: none;
  }
`
export function Menu(props) {


  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

 

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
 
    const logout = async () => {
    await signOut(auth);
  };







   
 if(user?.email){
     return (
      <AccessibilityContainer>
        {!isMobile && <Marginer direction="horizontal" margin={10} />}
        <Marginer direction="horizontal" margin={10} />   
        <Link to="/profile">

        <UserProfile>
          {user?.email}
        </UserProfile> 
        </Link>
        
        <Marginer direction="horizontal" margin={10} />            

      <Button1 onClick={logout}> Sign Out </Button1>
      </AccessibilityContainer>

     );

 }

   
  else
  {
  return (
     <AccessibilityContainer>
        {!isMobile && <AnchorLink>Locul pentru programatori</AnchorLink>}
        {!isMobile && <Marginer direction="horizontal" margin={10} />}
        {!isMobile && <Separtor />}
        <Marginer direction="horizontal" margin={10} />            
        <Link to="/customer/access/signup">
          <Button size={11}>Register</Button>
        </Link>
        <Marginer direction="horizontal" margin={8} />
        <Link to="/customer/access/signin">
          <Button size={11}>Login</Button>
        </Link>
      </AccessibilityContainer>
  );
  }


}