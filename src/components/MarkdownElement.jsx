import React from 'react';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

const MarkdownElement = ({ text }) => {
    const html = marked(text || '');

    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
};

MarkdownElement.propTypes = {
    text: React.PropTypes.string.isRequired
};

export default MarkdownElement;
