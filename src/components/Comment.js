import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  responseCount: PropTypes.number.isRequired
};

const defaultProps = {};

const Comment = ({ author, text, date, responseCount }) => (
  <div>
    <span>{author}</span>
    <span>{text}</span>
    <span>{date}</span>
    <br />
    <span>{responseCount}</span>
  </div>
);

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
