import React from "react";

import {InnerPageContainer,PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";
import { TopSection } from "./topSection";

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

export function SidePage(props){

    return <PageContainer> 
            
            <TopSection>
                <Navbar useTransparent />
            </TopSection> 
            <Footer />
        </PageContainer>
}