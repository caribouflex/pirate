import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import Comment from "../components/Comment";
import {
  getComments,
  setSelectedComment,
  setSelectedStory
} from "../redux-saga/actions";
import { theme } from "../style/theme";
import {
  selectCommentParent,
  selectCommentChildrens,
  selectAllCommentsId,
  selectCommentsOpen,
  getCommentsErrorMessage
} from "../redux-saga/selectors";
import CommentsHeader from "../components/CommentsHeader";
import Error from "../components/Error";

const Container = styled.div`
  ${({ visible }) => !visible && "display:none;"};
  width: 50%;
  border-radius: 4px;
  background-color: ${theme.colors.secondary};
  margin: 20px;

  @media (max-width: 1070px) {
    position: absolute;
    margin: 0;
    left: 0;
    top: 80px;
    bottom: 0;
    right: 0;
    width: 100%;
    height: fit-content;
    z-index: 10;
  }
`;

const propTypes = {
  allCommentsId: PropTypes.arrayOf(PropTypes.string),
  comments: PropTypes.shape({}),
  errorMessage: PropTypes.string,
  getCommentsAction: PropTypes.func.isRequired,
  parentId: PropTypes.number,
  setSelectedCommentAction: PropTypes.func.isRequired,
  setSelectedStoryAction: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

const defaultProps = {
  comments: {},
  parentId: null,
  allCommentsId: [],
  errorMessage: null
};

class Comments extends React.PureComponent {
  handleClick = (kids, id, parentId) => {
    const {
      allCommentsId,
      getCommentsAction,
      setSelectedCommentAction
    } = this.props;
    setSelectedCommentAction(id);
    if (!allCommentsId.includes(id.toString())) {
      getCommentsAction(kids, id, parentId);
    }
  };

  backClick = () => {
    const { setSelectedCommentAction, parentId } = this.props;
    setSelectedCommentAction(parentId);
  };

  closeClick = () => {
    const { setSelectedCommentAction, setSelectedStoryAction } = this.props;
    setSelectedStoryAction(null);
    setSelectedCommentAction(null);
  };

  render() {
    const { errorMessage, comments, parentId, visible } = this.props;

    return (
      <Container visible={visible}>
        <CommentsHeader
          backArrowVisible={visible}
          onBackClick={this.backClick}
          onCloseClick={this.closeClick}
          parentId={parentId}
        />
        {errorMessage ? (
          <Error>{errorMessage}</Error>
        ) : (
          Object.keys(comments).map(id => {
            const comment = comments[id];
            return (
              <Comment
                key={comment.id}
                id={comment.id}
                author={comment.by}
                text={comment.text}
                date={comment.time}
                loadResponses={this.handleClick}
                responsesId={comment.kids}
                parent={comment.parent}
              />
            );
          })
        )}
      </Container>
    );
  }
}

Comments.propTypes = propTypes;
Comments.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    parentId: selectCommentParent(state),
    comments: selectCommentChildrens(state),
    allCommentsId: selectAllCommentsId(state),
    visible: selectCommentsOpen(state),
    errorMessage: getCommentsErrorMessage(state)
  };
};

const mapDispatchToProps = {
  getCommentsAction: getComments,
  setSelectedCommentAction: setSelectedComment,
  setSelectedStoryAction: setSelectedStory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);

export { Comments };
