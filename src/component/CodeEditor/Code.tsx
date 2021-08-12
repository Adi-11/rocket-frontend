import React from "react";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/mode/python";
import "brace/theme/monokai";
import "brace/ext/language_tools";

interface CodeProps {}

export const Code: React.FC<CodeProps> = ({}) => {
  return (
    <AceEditor
      placeholder="Your code goes here!"
      mode="python"
      theme="monokai"
      fontSize={20}
      style={{ width: "50%" }}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};
