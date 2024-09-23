import React from 'react';
import styled from '@emotion/styled';
import { ImageTextBlock } from '../types';

interface WrapperProps {
  leftToRight: boolean;
}

const ImageText: React.FC<ImageTextBlock> = ({
  title,
  text,
  imageURI,
  leftToRight = true,
}) => {
  return (
    <Wrapper leftToRight={leftToRight}>
      <Image src={imageURI} />
      <TextWrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default ImageText;

const Wrapper = styled.div<WrapperProps>`
  margin: 0 0 25px;
  display: flex;
  flex-direction: ${(props) => (props.leftToRight ? 'row' : 'row-reverse')};
`;

const Image = styled.img`
  max-width: 100px;
  margin-right: 15px;
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  margin: 0 0 15px;
`;

const Text = styled.p`
  margin: 0 0 15px;
`;
