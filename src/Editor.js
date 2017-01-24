import React, { PropTypes } from "react";
import AceEditor from "react-ace";
//import brace from 'brace';
import 'brace/mode/markdown';
import 'brace/theme/textmate';
import "./Editor.css"

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text) {
    this.props.onEdit(text)
  }

  render() {
    const text = this.props.text;
    return (
      <AceEditor
        mode="markdown"
        theme="textmate"
        name="editor"
        value={text}
        editorProps={{$blockScrolling: true}}
        onChange={this.handleChange}
      />
    )
  }
}

Editor.propTypes = {
  text:PropTypes.string.isRequired,
  onEdit:PropTypes.func.isRequired
}

export default Editor;
