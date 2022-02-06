import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import TopSectionBackgroundImg from "../../images/chilllanding.jpg"
import MainSectionImg from "../../images/chillcartoon.jpg";
import { deviceSize } from "../../components/responsive";

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

const JoinContainer = styled.div`
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
    const [textarea, setTextarea] = useState(
        "Spune ceva despre tine si cateva date de contact, iar noi o sa te contactam in cel mai scurt timp!"
      );
    
      const handleChange = (event) => {
        setTextarea(event.target.value)
      }
  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <JoinContainer>
            <form>
            <textarea value={textarea} onChange={handleChange} />
            </form>
          </JoinContainer>
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

ReactDOM.render(<TopSection />, document.getElementById('root'));