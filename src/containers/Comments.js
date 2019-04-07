import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Comment from "../components/Comment";
import { getComments } from "../redux-saga/actions/action";

const propTypes = {
  comments: PropTypes.shape({})
};

const defaultProps = {
  comments: {}
};

const Comments = ({ comments, getCommentsAction }) => {
  return (
    <div>
      {Object.keys(comments).map(id => {
        const comment = comments[id];
        return (
          <div key={comment.id}>
            <Comment
              author={comment.by}
              text={comment.text}
              date={comment.time}
              responseCount={comment.kids && comment.kids.length}
            />
            <button onClick={() => getCommentsAction(comment.kids, comment.id)}>
              Load comment childs
            </button>
          </div>
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

const mapDispatchToProps = {
  getCommentsAction: getComments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
