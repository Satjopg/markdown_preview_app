import React, { Component } from 'react';
import Editor from "./Editor";
import Preview from "./Preview"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:"# Hello Markdown Editor!!"
    }
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(text){
    this.setState({ value:text })
  }

  render() {
    const value = this.state.value;
    return (
      <div className="clearfix" id="app">
        <Editor
          onEdit={this.onEdit}
          text={value}
        />
        <Preview markdown={value}/>
      </div>
    );
  }
}

export default App;
