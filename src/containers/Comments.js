import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Comment from "../components/Comment";

const propTypes = {
  comments: PropTypes.shape({})
};

const defaultProps = {
  comments: {}
};

const Comments = ({ comments }) => {
  return (
    <div>
      {Object.keys(comments).map(id => {
        const comment = comments[id];
        return (
          <Comment
            key={comment.id}
            author={comment.by}
            text={comment.text}
            date={comment.time}
          />
        );
      })}
    </div>
  );
};

Comments.propTypes = propTypes;
Comments.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    comments: state.comments[state.comments.selectedStoryId]
  };
};

export default connect(mapStateToProps)(Comments);
