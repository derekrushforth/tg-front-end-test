import React from 'react';
import styled from '@emotion/styled';
import { HeroBlock } from '../types';

const Hero: React.FC<HeroBlock> = ({ imageURI }) => {
  return (
    <Wrapper>
      <Image src={imageURI} />
    </Wrapper>
  )
}

export default Hero;

const Wrapper = styled.div`
  margin: 0 0 25px;
  text-align: center;
`;

const Image = styled.img`
  max-height: 100px;
`;