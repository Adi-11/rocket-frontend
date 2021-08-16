import React from "react";
import { AppTabs } from "../Tabs/Tabs";
import { Code } from "./Code";

interface EditorComponentProps {}

export const CodeEditor: React.FC<EditorComponentProps> = ({}) => {
  return (
    <div>
      <AppTabs />
    </div>
  );
};
