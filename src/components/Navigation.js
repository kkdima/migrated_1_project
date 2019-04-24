import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../theme/GlobalStyle';

const Navigation = () => {
    return (
        <NavLinkWrapper>
            <NavLink className="main-nav" activeClassName="main-nav-active" to="/" exact>Home</NavLink>
            <NavLink className="main-nav" activeClassName="main-nav-active" to="/product" exact>Product</NavLink>
            <NavLink className="main-nav" activeClassName="main-nav-active" to="/team" exact>Team</NavLink>
            <NavLink className="main-nav" activeClassName="main-nav-active" to="/blog" exact>Blog</NavLink> 
            <NavLink className="main-nav" activeClassName="main-nav-active" to="/contact" exact>Contact</NavLink>
        </NavLinkWrapper>
    );
};

export default Navigation;

const NavLinkWrapper = styled.div`
    @media ${device.mobile} {
        display: flex;
        max-width: 1200px;
        margin: 0 auto;
        align-items: flex-start;
        justify-content: space-between;
        font-family: 'Chivo', sans-serif;
        color: #000000;
        flex-direction: column;
        margin: 30px 25px;
    }
    @media ${device.tablet} {
        max-width: 352px;
    }
    @media ${device.laptop} {
        flex-direction: row;
        max-width: 375px;
    }
`;