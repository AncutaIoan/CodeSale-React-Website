import React from "react";

import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { Navbar } from "../../components/navbar";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import { Services } from "./services";
import { SpecialistAd } from "../../components/specialistAd";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";
const Title = styled.h1`
    font-weight:900;
    color : #000;
`;

const ContentContainer = styled.div`
    width:100%;
    max-width: ${deviceSize.laptop}px;
    display: flex;
    flex-direction : column;
    align-items : flex-start;

`;
export function HomePage(props){

    return <PageContainer> 
            <TopSection>
                <Navbar useTransparent />
            </TopSection> 
            <InnerPageContainer>
                <ContentContainer>
                    <Services />
                        
                </ContentContainer>
                <Marginer direction="vertical" margin="1em" />
                <SpecialistAd />
            </InnerPageContainer>
            <Footer />
        </PageContainer>
}