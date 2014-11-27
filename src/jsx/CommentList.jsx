var React = require('react');
var Comment = require('./Comment.jsx').Comment;

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        I am a CommentListt.
        <Comment name="Emily"/>
        <Comment name="Hundi"/>
        <Comment name="Boox"/>
      </div>
    );
  }
});

//module.exports = CommentList;
exports.CommentList = CommentList;