import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandlogo";
import { Button } from "../button";
import { Marginer } from "../marginer";

import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

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



  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
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
    </NavbarContainer>
  );
}