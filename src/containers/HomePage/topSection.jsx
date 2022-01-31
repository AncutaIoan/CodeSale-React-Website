import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import TopSectionBackgroundImg from "../../images/chilllanding.jpg"
import MainSectionImg from "../../images/chillcartoon.jpg";
import { BrandLogo } from "../../components/brandlogo";
import { deviceSize } from "../../components/responsive";
import {Marginer} from "../../components/marginer";

import {Button} from "../../components/button";
const TopSectionContainer = styled.div`
    width:100%;
    height: 800px;
    background:url(${TopSectionBackgroundImg});
    background-position: 0px -160px;
    background-size: cover;



`;

const BackgroundFilter = styled.div`
    width : 100%;
    height : 100%;
    background-color: rgba(48,70,83,0.9);
    display: flex;
    flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
    width : 100%;
    height : 100%;
    display: flex;
    align-items : center;
    justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width: 44em;
  height: 34em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 35px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

export function TopSection(props){
    const {children} = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <BrandLogo
              logoSize={isMobile ? 40 : 65}
              textSize={isMobile ? 35 : 55}
            />
            <Marginer direction="vertical" margin={8} />
            <SloganText>Ai facut o aplicatie sau un scurt cod si nu sti ce urmeaza ?</SloganText>
            <SloganText>Aici il poti vinde!</SloganText>
            <Marginer direction="vertical" margin={15} />
            <Button>Alatura-te noua!</Button>
          </LogoContainer>
          {!isMobile && (
            <StandoutImage>
              <img src={MainSectionImg} alt="main img" />
            </StandoutImage>
          )}
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );


}