import React, { useState } from 'react';
import Preview from './components/Preview';
import styled from '@emotion/styled';
import data from './data';

const App: React.FC = () => {
  const [templateJSON, setTemplateJSON] = useState(data);

  const handleEditorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTemplateJSON(e.target.value);
  };

  return (
    <Wrapper>
      <InputSection>
        <EditorTextarea value={templateJSON} onChange={handleEditorChange} />
      </InputSection>
      <PreviewSection>
        <Preview data={templateJSON} />
      </PreviewSection>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const InputSection = styled.div`
  width: 50%;
  box-sizing: border-box;
`;

const EditorTextarea = styled.textarea`
  width: 100%;
  height: 100vh;
  resize: none;
  border: none;
  font-size: 1rem;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 0;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  background-color: #000;
  color: #fff;
  line-height: 1.4;

  &:focus {
    outline: none;
  }
`;

const PreviewSection = styled.div`
  width: 50%;
  padding: 1rem 3rem;
  box-sizing: border-box;
  line-height: 1.75rem;
  overflow-y: scroll;
`;
