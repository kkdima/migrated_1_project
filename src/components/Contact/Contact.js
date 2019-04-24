import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';

const Contact = () => {
    return (
        <Wrapper>
            <div> Contact page</div>
        </Wrapper>
    );
};

export default Contact;

const Wrapper = styled.div`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;