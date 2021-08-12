import React from "react";
import "./App.css";
import { AppBarHeader } from "./component/AppBar/AppBar";
import { Code } from "./component/CodeEditor/Code";

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <AppBarHeader />
      <div style={{ marginTop: "5%" }}>
        <Code />
      </div>
    </div>
  );
};

export default App;
