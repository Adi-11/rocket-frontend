import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/mode/python";
import "brace/mode/c_cpp";
import "brace/mode/java";
import "brace/theme/monokai";
import "brace/ext/language_tools";

interface CodeProps {
  mode: string;
}

export const Code: React.FC<CodeProps> = ({ mode }) => {
  const [editMode, setEditMode] = useState<string>("c_cpp");

  useEffect(() => {
    if (mode === "Python") {
      setEditMode("python");
    } else if (mode === "Javascript") {
      setEditMode("javascript");
    } else if (mode === "java") {
      setEditMode("java");
    }
  }, [mode]);

  return (
    <AceEditor
      placeholder="Your code goes here!"
      mode={editMode}
      theme="monokai"
      fontSize={18}
      style={{ width: "70%", fontFamily: "Roboto Mono" }}
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
