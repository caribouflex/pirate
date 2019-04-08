import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import Comment from "../components/Comment";
import { getComments } from "../redux-saga/actions/action";
import { Paper } from "@material-ui/core";
import { Title } from "../style/basic";

const Container = styled.div`
  padding: 20px;
  flex: 1;
`;

const PaperStyled = styled(Paper)`
  padding: 20px;
  margin: 20px;
  background-color: #323232 !important;
`;

const propTypes = {
  comments: PropTypes.shape({})
};

const defaultProps = {
  comments: {}
};

const Comments = ({ comments, getCommentsAction }) => {
  return (
    <Container>
      <Title>Comments</Title>
      {Object.keys(comments).map(id => {
        const comment = comments[id];
        return (
          <PaperStyled key={comment.id} elevation={2}>
            <Comment
              id={comment.id}
              author={comment.by}
              text={comment.text}
              date={comment.time}
              loadResponses={getCommentsAction}
              responsesId={comment.kids}
            />
          </PaperStyled>
        );
      })}
    </Container>
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
