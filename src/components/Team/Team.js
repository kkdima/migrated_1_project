import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';

const Team = () => {
    return (
        <Wrapper>
            <div> Team page</div>
        </Wrapper>
    );
};

export default Team;

const Wrapper = styled.div`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;