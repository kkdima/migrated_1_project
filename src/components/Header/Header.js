import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';
import '../../styles/styles.scss';
import MainIllustration from '../../images/MainIllustration.png';
import img from '../../images/logo.png';

export default () => (
    <Container>
        <Wrapper>
            <LogoNavHolder>
                <Logo src={img} id="logo"/>
                <Ul>
                    <Li><A ahref="#">Home</A></Li>
                    <Li><A ahref="#">Product</A></Li>
                    <Li><A ahref="#">Team</A></Li>
                    <Li><A ahref="#">Blog</A></Li>
                    <Li><A ahref="#">Contact</A></Li>
                </Ul>
            </LogoNavHolder>
            <LogoNavHolder2>
                <Button data-micron="bounce">Sign Up</Button>
                <Img src={MainIllustration} id="illustration"></Img>
            </LogoNavHolder2>
        </Wrapper>
    </Container>
);

// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :

const Container = styled.div`
  @media ${device.mobile} {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    align-items: flex-start;
    justify-content: space-between;
    font-family: 'Chivo', sans-serif;
    /* font-size: 1.2em; */
    color: #000000;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    font-size: 1em;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  /* align-items: space-between; */
  @media ${device.laptop} {
    justify-content: flex-start;

  }
  `;

const LogoNavHolder = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 615px;
  @media ${device.laptop} {
    justify-content: center;
    position: relative;
    right: 300px;
    }
  `;

const LogoNavHolder2 = styled.div`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Logo = styled.img`
  src: url(${props => props.src});
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    margin-top: 45px;
  }
  @media ${device.laptop} {
    display: flex;
    /* right: 0; */
    /* margin-right: 117px; */
  }
`;

const Ul = styled.ul`
  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 37px;
    position: relative;
    left: 30px;
  }
  @media ${device.tablet} {
    left: 50px;
  }
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    margin-top: 57px;
    position: relative;
    /* right: 100px; */
  }
`;

const Li = styled.li`
  @media ${device.mobile} {
    list-style: none;
    margin-bottom: 15px;
    margin-right: 32px
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const A = styled.a`
  @media ${device.mobile} {
    position: relative;
    text-decoration: none;
    padding-bottom: 8px;
    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: rgb(72, 189, 76);
    }
    &:before {
      opacity: 0;
      transform: translateY(- 8px);
      transition: transform 0s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s;
    }
    &:after {
      opacity: 0;
      transform: translateY(8px/2);
      transition: transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s;
    }
    &:hover,
    &:focus {
      &:before,
      &:after {
        opacity: 1;
        transform: translateY(0);
      }
      &:before {
        transition: transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s;
      }
      &:after {
        transition: transform 0s .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s .2s;
      }
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

const Button = styled.button`
  @media ${device.mobile} {
    border: 1px solid white;
    font-family: 'Chivo', sans-serif;
    min-height: 40px;
    min-width: 110px;
    text-align: center;
    font-size: 16px;
    color: #F1F8E9;
    border-radius: 5px;
    background: none;
    position: absolute;
    margin: 20px 10% 10px 0;
    margin-top: 25px;
    right: 0%;
  }
  @media ${device.tablet} {
    /* order: 2; */
    height: 48px;
    width: 128px;
  }
  @media ${device.laptop} {
    margin-top: 45px;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  /* max-width: 660px; */

  #illustration {
    position: relative;
    width: 55%;
    top: 0;
    right: 0;
    z-index: -1;
  }

  #logo {
    display: none;
    margin: 45px 10px 10px;
    margin-right: 117px;
  }

  @media ${device.mobile} {
    width: 50%;
    /* max-width: 660px; */
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
    width: 40%;
    #illustration {
      width: 50%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }
  @media ${device.laptop} {
    width: 620px;
    #illustration {
    }
  }
`;

// const HeaderContainer = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   font-family: Chivo;
//   font-size: 1.2em;
//   color: #000000;
// `;

// const LogoNavHolder = styled.div`
//   display: flex;
//   align-items: flex-start;
// `;
// const Logo = styled.img`
//   position: absolute;
//   top: 0;
//   right: 0;
//   z-index: -1;
//   max-width: 660px;
// `;