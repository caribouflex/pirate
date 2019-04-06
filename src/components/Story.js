import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired
};

const defaultProps = {};

const Story = ({ author, title, link, date, score }) => (
  <div>
    <span>{author}</span>
    <span>{title}</span>
    <span>{link}</span>
    <span>{date}</span>
    <span>{score}</span>
  </div>
);

Story.propTypes = propTypes;
Story.defaultProps = defaultProps;

export default Story;
