import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';
import photobox1 from '../../images/photobox1.png';
import photobox2 from '../../images/photobox2.png';
import backgroundImg from '../../images/background_third_section.png';

export default () => (
    <ThirdSectionContainer>
        <Width1056>
            <TextContainer>
                <H2>Invest on your convenience</H2>
                <P>Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</P>
            </TextContainer>

            <PhotosContainer>
                <PhotoItem>
                    <Img src={photobox1}/>
                    <ColorOverlay></ColorOverlay>
                    <Text>
                        <P>NEW FARM TODAY</P>
                        <Line></Line>
                        <H2>Short terms investment</H2>
                        <P>Invest in farms that will be ready for harvest in 3-18 months</P>
                        <Button data-micron="bounce">Browse Farm</Button>
                    </Text>
                </PhotoItem>
                <PhotoItem>
                    <Img src={photobox2}/>
                    <ColorOverlay></ColorOverlay>
                    <Text>
                        <P>FULLY FUNDED</P>
                        <Line></Line>
                        <H2>Long terms investment</H2>
                        <P>Consider farms that have long term investment program.</P>
                        <Button data-micron="bounce">Learn more</Button>
                    </Text>
                </PhotoItem>
            </PhotosContainer>
        </Width1056>

        <HowItWorksBanner src={backgroundImg}>
            <H2>How it works</H2>

            <P>Take your pick from the supply chain and participate in agribusiness projects that are backed up not only by Zou, but also by the best land, family heritage, innovation and overall superior expertise.</P>
      
            <Points>
                <CircleNumber>
                    <P id="GreenLetter">01</P>
                </CircleNumber>
                <Line id='line'></Line>
                <CircleNumber>
                    <P>02</P>
                </CircleNumber>
                <Line id='line'></Line>
                <CircleNumber>
                    <P>03</P>
                </CircleNumber>
                <Line id='line'></Line>
                <CircleNumber>
                    <P>04</P>
                </CircleNumber>
            </Points>

            <LastParagraph>
                <H2>Select your farmshare and complete reservation form.</H2>
                <P>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere</P>
            </LastParagraph>

        </HowItWorksBanner>

    </ThirdSectionContainer>
);

// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :

const Img2 = styled.img`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const ThirdSectionContainer = styled.div`
  @media ${device.mobile} {
    max-width: 1200px;
    margin: 0 auto;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Width1056 = styled.div`
  @media ${device.mobile} {
    max-width: 1056px;
    margin: 0 auto;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const TextContainer = styled.div`
  @media ${device.mobile} {
    margin-left: 20px;
    margin-right: 20px;
    max-width: 704px;
    margin: 0 auto;
    H2, P {
      text-align: center;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    margin: 0;
    H2, P {
      text-align: left;
    }
  }
`;
const PhotosContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 94px;
    margin-bottom: 50px;

  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const PhotoItem = styled.div`
  @media ${device.mobile} {
    width: 512px;
    height: 416px;
    border-radius: 5px;
    margin: 0 auto;
    :first-child {
      margin-bottom: 50px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    :first-child {
      margin-bottom: 0px;
    }
    margin: 0;
  }
`;
const Text = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    z-index: 3;
    position: relative;
    bottom: 416px;
    P, H2 {
      font-family: Chivo-Regular;
      position: relative;
      max-width: 248px;
      color: #FFFFFF;
      margin-left: 67px;
    }
    P:first-of-type {
      font-size: 14px;
      color: #66BB6A;
      letter-spacing: 2.8px;
      line-height: 24px;
      margin-top: 39px;
    }
    P:last-of-type {
      font-size: 16px;
      color: #E2EFD2;
      line-height: 24px;
      margin-top: 0;
      margin-bottom: 29px;
    }
    H2 {
      font-family: Chivo-Bold;
      font-size: 31px;
      text-align: left;
      line-height: 40px;
      margin-bottom: 17px;
      margin-top: 61px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const P = styled.p`
  @media ${device.mobile} {
    font-family: Chivo-Regular;
    font-size: 18px;
    color: #324148;
    line-height: 32px;
    max-width: 700px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Points = styled.div`
  @media ${device.mobile} {
    display: none;
    #GreenLetter {
      color: #66BB6A;
    }
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    #line {
      margin: 0;
      height: 2px;
      color: #A5D6A7;
      display: flex;
      align-items: center;
      position: relative;
      top: 37px;
      width: 90px;
    }
    margin-top: 20px;
  }
  @media ${device.laptop} {
    width: 704px;
    #line {
      width: 139px;
    }
  }
`;

const LastParagraph = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 50px;
    max-width: 702px;
    justify-content: space-between;
    H2, P {
      text-align: left;
      margin-left: 30px;
      margin-right: 30px;
    }
    H2 {
      margin-top: 0px;
      max-width: 280px;
    }
    P {
      max-width: 352px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    H2, P {
      text-align: left;
      margin-left: 0px;
      margin-right: 0px;
    }
    flex-direction: row;
    margin-top: 106px;
  }
`;

const CircleNumber = styled.div`
  @media ${device.mobile} {
    :first-of-type {
      background: #A5D6A7;
    }
    border-radius: 50%;
    color: #A5D6A7;
    border: solid white 2px;;
    display: flex;
    width: 72px;
    height: 72px;
    flex-direction: row;
    P {
      position: relative;
      top: 20px;
      right: 2px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const H2 = styled.h2`
  @media ${device.mobile} {
    font-family: Chivo-Bold;
    font-size: 36px;
    line-height: 64px;
    color: #000000;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Img = styled.img`
  @media ${device.mobile} {
    position: absolute;
    z-index: 0;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
const ColorOverlay = styled.div`
  @media ${device.mobile} {
    position: relative;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image: linear-gradient(-180deg, rgba(97,118,127,0.00) 0%, #324148 100%);
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Line = styled.div`
  @media ${device.mobile} {
    background: #FFFFFF;
    width: 56px;
    height: 4px;
    border-radius: 2px;
    position: relative;
    margin-left: 67px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Button = styled.button`
  @media ${device.mobile} {
    background: #FFFFFF;
    font-family: Chivo-Regular;
    font-size: 18px;
    color: #66BB6A;
    text-align: center;
    line-height: 32px;
    position: relative;
    margin-left: 67px;
    border-radius: 5px;
    width: 200px;
    height: 48px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
const HowItWorksBanner = styled.div`
  @media ${device.mobile} {
    margin: 117px 30px 0px;
    height: 720px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 106px 30px 0 30px;
    background-repeat: no-repeat;
    margin: 0 auto;
    H2 {
      font-family: Chivo-Bold;
      color: #FFFFFF;
      text-align: center;
      line-height: 64px;
      margin-bottom: 12px;
    }
    P {
      font-family: Chivo-Regular;
      color: #E8F5E9;
      text-align: center;
      margin: 0 auto;
    }
    P:first-of-type {
      margin-bottom: 0px;
    }
    H2:last-of-type {
      font-family: Chivo-Bold;
      font-size: 24px;
      color: #FFFFFF;
      line-height: 32px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    margin: 117px 0px 0px;
    max-width: 1200px;
    P:first-of-type {
      margin-bottom: 20px;
    }
  }
`;