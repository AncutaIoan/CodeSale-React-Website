import React, {useState} from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import TopSectionBackgroundImg from "../../images/chilllanding.jpg"
import MainSectionImg from "../../images/chillcartoon.jpg";
import { BrandLogo } from "../../components/brandlogo";
import { deviceSize } from "../../components/responsive";
import {Marginer} from "../../components/marginer";
import {
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
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
const ProfileContainer = styled.div`

    display:flex;
    flex-direction: column;
    `
const StandoutImage = styled.div`
  width: 44em;
  height: 34em;
  img {
    width: 100%;
    height: 100%;
  }
`;


const SloganText = styled.h5`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
`;
export function TopSection(props){
    const {children} = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
 
  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
        <ProfileContainer>
                <Title>Profile</Title>

                <SloganText>{user?.email}</SloganText>


                <SloganText>Chiol</SloganText>
                <SloganText>Ion</SloganText>
                <SloganText>0726036703</SloganText>
      </ProfileContainer>



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