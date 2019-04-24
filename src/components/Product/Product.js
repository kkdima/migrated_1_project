import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';

import Footer from '../Home/Footer';

const Product = () => {
    return (
        <Wrapper>
            <Footer />
        </Wrapper>
    );
};

export default Product;

const Wrapper = styled.div`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
