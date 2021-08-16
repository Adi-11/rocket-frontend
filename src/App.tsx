import React from "react";
import "./App.css";
import { AppBarHeader } from "./component/AppBar/AppBar";
import { Main } from "./component/Body/Main";
import { Code } from "./component/CodeEditor/Code";
import { CodeEditor } from "./component/CodeEditor/EditorComponent";

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <AppBarHeader />
      <div className="mainBody">
        <div className="leftBody">
          <Main />
        </div>
        <div className="rightBody">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default App;
