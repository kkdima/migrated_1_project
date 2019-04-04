import React from 'react'
import { device } from '../../theme/GlobalStyle';
import styled from 'styled-components';
import InfoBox1 from '../../images/InfoBox1.png';
import InfoBox2 from '../../images/InfoBox2.png';
import InfoBox3 from '../../images/InfoBox3.png';
import background from '../../images/background.png';
  

export default class SecondSection extends React.Component {
  render() {
    return (
      <SeconSectionContainer>
        <Img src={background}/>


        <SecondSectionParagraph>
          <H2>New Opportunities</H2>
          <P>We are the first and the only crowdfunding platform enabling you to help finance our farmers.</P>
        </SecondSectionParagraph>

        <InfoBoxContainer>

          <InfoBox>
            <ImgBox src={InfoBox1} />
            <H3>Connect with our farmers</H3>
            <Pbox>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</Pbox>
          </InfoBox>

          <InfoBoxGreen>
            <ImgBox src={InfoBox2} />
            <H3>Connect with our farmers</H3>
            <Pbox>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</Pbox>
          </InfoBoxGreen>

          <InfoBox>
            <ImgBox src={InfoBox3} />
            <H3>Connect with our farmers</H3>
            <Pbox>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</Pbox>
          </InfoBox>

        </InfoBoxContainer>
        <Line></Line>

      </SeconSectionContainer>
    )
  }
};

// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :

export const SeconSectionContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-flow: column;
  }
  @media ${device.tablet} {
    justify-content: center;
  }
  @media ${device.laptop} {
    margin-top: 228px; 
  }
`
export const SecondSectionParagraph = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-flow: column;
    max-width: 552px;
    justify-content: center;
    margin: 0 auto;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const H2 = styled.h2`
  @media ${device.mobile} {
    font-family: Chivo-Bold;
    font-size: 36px;
    color: #000000;
    text-align: center;
    line-height: 64px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const P = styled.p`
  @media ${device.mobile} {
    font-family: Chivo-Regular;
    font-size: 18px;
    color: #324148;
    text-align: center;
    line-height: 32px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const InfoBoxContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin: 0 auto;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    flex-flow: row;
  }
`

export const InfoBox = styled.div`
  @media ${device.mobile} {
    background: #FFFFFF;
    box-shadow: -1px 13px 20px 0 #F0F2F4;
    margin: 98px 18px 0;
    max-width: 328px;
    min-height: 328px;
    border-radius: 5px;
  }
  @media ${device.tablet} {

  }
  @media ${device.laptop} {
  }
`
export const InfoBoxGreen = styled(InfoBox)`
  h3, p {
    color: #FFFFFF;
  }
  @media ${device.mobile} {
    background: #66BB6A;
    box-shadow: 0 25px 25px 0 rgba(118,196,125,0.31);
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const Pbox = styled.p`
  @media ${device.mobile} {
    margin-left: 48px;
    margin-right: 32px;
    margin-bottom: 50px;
    font-family: Chivo-Light;
    font-size: 16px;
    color: #263238;
    line-height: 24px;
    z-index: 2;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const H3 = styled.h3`
  @media ${device.mobile} {
    margin-left: 48px;
    margin-right: 32px;
    font-family: Chivo-Bold;
    font-size: 18px;
    color: #263238;
    text-align: left;
    line-height: 24px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const ImgBox = styled.img`
  @media ${device.mobile} {
    margin-left: 48px;
    margin-top: 49px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const Img = styled.img`
  @media ${device.mobile} {
    position: absolute;
    z-index: -2;
    top: 1000px;
    background: #ffffff;
    width: 100%;
    /* box-shadow: 0 -18px 52px 30px rgba(245,245,245,0.9); */
  }
  @media ${device.tablet} {
    top: 840px;
  }
  @media ${device.laptop} {
  }
`
export const Line = styled.div`
  @media ${device.mobile} {
    width: 100%;
    max-width: 1200px;
    height: 2px;
    background-color: #EEEEEE;
    margin: 0 auto;
    margin-top: 118px;
    margin-bottom: 82px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`