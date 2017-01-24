import React, { PropTypes } from "react";
import AceEditor from "react-ace";
import Subheader from 'material-ui/Subheader';
import 'brace/mode/markdown';
import 'brace/theme/terminal';
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
      <div>
        <Subheader>Editor</Subheader>
        <AceEditor
          mode="markdown"
          theme="terminal"
          name="editor"
          value={text}
          width="50%"
          height="500px"
          editorProps={{$blockScrolling: true}}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

Editor.propTypes = {
  text:PropTypes.string.isRequired,
  onEdit:PropTypes.func.isRequired
}

export default Editor;
