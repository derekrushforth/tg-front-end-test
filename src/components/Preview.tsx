import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Hero from './Hero';
import ImageText from './ImageText';
import Data from './Data';
import { DataBlock, HeroBlock, ImageTextBlock } from '../types';

export type Template =  DataBlock | HeroBlock | ImageTextBlock;
interface PreviewProps {
  data: string;
}

const Preview: React.FC<PreviewProps> = ({ data }) => {
  const [parsedData, setParsedData] = useState<Template[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const parsed:Template[] = JSON.parse(data);
      setParsedData(parsed);
      setError(false);
    } catch(e) {
      setError(true);
    }
  }, [data]);

  if (!data) return <ErrorMessage>Please enter template JSON</ErrorMessage>
  if (error) return <ErrorMessage>Invalid template JSON</ErrorMessage>

  return (
    <>
      {parsedData.map((block, index) => {
        if (block.type === 'hero') return <Hero key={index} {...block} />
        if (block.type === 'image-text') return <ImageText key={index} {...block} />
        if (block.type === 'data') return <Data key={index} {...block} />

        return <ErrorMessage key={index}>🚨 Component type not supported</ErrorMessage>
      })}
    </>
  )
}

export default Preview;

const ErrorMessage = styled.p`
  color: red;
`;