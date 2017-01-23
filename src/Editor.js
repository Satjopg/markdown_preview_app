import React from "react";
import AceEditor from "react-ace";
//import brace from 'brace';
import 'brace/mode/markdown';
import 'brace/theme/github';

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render() {
    return (
      <AceEditor
        mode="markdown"
        theme="github"
        name="editor"
        fontSize="16px"
        defaultValue="Coding Here!!"
        width="40%"
        height="600"
        editorProps={{$blockScrolling: true}}
      />
    )
  }
}

export default Editor;
