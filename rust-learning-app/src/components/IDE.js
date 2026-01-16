import React from 'react';
import Editor from '@monaco-editor/react';

const IDE = () => {
  return (
    <Editor
      height="100%"
      defaultLanguage="rust"
      defaultValue="// some comment"
      theme="vs-dark"
    />
  );
};

export default IDE;
