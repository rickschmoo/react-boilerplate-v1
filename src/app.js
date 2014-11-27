// useful reference
// http://lincolnloop.com/blog/untangle-your-javascript-browserify/
var React = require('react');
var CommentList = require('./jsx/CommentList.jsx').CommentList;

// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBoxxy.
        <CommentList/>
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
);