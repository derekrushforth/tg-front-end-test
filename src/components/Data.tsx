import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { DataBlock } from '../types';

const Data: React.FC<DataBlock> = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<string>();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        setError('The endpoint returned an error!');
        return;
      }

      const json = await response.json();
      setResponseData(json);
    } catch (e) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  const renderResponse = () => {
    if (loading) return 'Fetching Data...';
    if (error) return error;

    return JSON.stringify(responseData, null, 2);
  };

  return (
    <Wrapper>
      <h2>
        Data Response{' '}
        <button onClick={fetchData} disabled={loading} aria-label="Refresh">
          Refresh
        </button>
      </h2>
      <Response>{renderResponse()}</Response>
    </Wrapper>
  );
};

export default Data;

const Wrapper = styled.div`
  margin: 0 0 25px;
`;

const Response = styled.pre`
  background-color: black;
  color: #fff;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 5px;
  line-height: 1.4;
  height: 200px;
`;
