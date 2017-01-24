import React, { PropTypes } from "react";
import marked from "marked";
import hljs from "highlightjs"
import "./Preview.css"

class Preview extends React.Component {
  componentDidUpdate() {
    // Synchronous highlighting with highlight.js
    marked.setOptions({
        highlight: function(code, lang) {
            return hljs.highlightAuto(code, [lang]).value;
        }
    });
  }
  render() {
    return(
      <div id="preview"
        dangerouslySetInnerHTML={{__html: marked(this.props.markdown)}}
      ></div>
    )
  }
}

Preview.propTypes = {
  markdown:PropTypes.string.isRequired
}

export default Preview
