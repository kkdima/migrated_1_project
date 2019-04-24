import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';

const Blog = () => {
    return (
        <Wrapper>
            <div> Blog page</div>
        </Wrapper>
    );
};

export default Blog;

const Wrapper = styled.div`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;