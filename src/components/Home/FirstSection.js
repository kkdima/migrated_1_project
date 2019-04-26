import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';
import '../../styles/styles.scss';
import leaves from '../../images/Leaves.png';

export default () => (
    <FirstScreenContainer>
        <Img src={leaves} id="illustrationLeaves"/>
        <InfoBlock>
            <H1>A New Way to Invest in Agriculture</H1>
            <P>Zou provides farmes, ranchers, private foresters, and agricultural producers with online self service applications and educational materials.</P>
            <Button href="#!" data-micron="bounce">Invest Now</Button>
        </InfoBlock>
    </FirstScreenContainer>
);

const FirstScreenContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
const Img = styled.img`
  @media ${device.mobile} {
    position: absolute;
    width: 20%;
    max-width: 160px;
    z-index: -1;
    margin-top: 500px;
    left: 0;
  }
  @media ${device.tablet} {
    max-height: 580px;
    height: 50%;
    max-width: 160px;
    width: 50%;
  }
  @media ${device.laptop} {
    margin-top: 450px;
  }
`;
const InfoBlock = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-left: 30px;
    margin-right: 30px;
  }
  @media ${device.mobileL} {
    width: 365px;
  }
  @media ${device.tablet} {
    width: 473px;
    margin-top: 0px;
    margin-left: 50px;
  }
  @media ${device.laptop} {
    margin-top: 70px;
    max-width: 1200px;
  }
`;
const H1 = styled.h1`
  @media ${device.mobile} {
    font-family: 'Chivo', sans-serif;
    font-size: 37px;
    color: #000000;
    line-height: 64px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const P = styled.p`
  @media ${device.mobile} {
    font-family: 'Chivo', sans-serif;
    font-size: 18px;
    color: #263238;
    text-align: left;
    line-height: 32px;
    margin-top: 25px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
const Button = styled.button`
  @media ${device.mobile} {
    box-shadow: 0 13px 20px 0 rgba(118, 196, 125, 0.41);
    background: #66BB6A;
    font-family: 'Chivo', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    line-height: 32px;
    width: 144px;
    height: 48px;
    border-radius: 5px;
    border-style: none;
    margin-top: 54px;
    margin-right: 8px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    float: left;
  }
`;