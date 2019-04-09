import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import Comment from "../components/Comment";
import {
  getComments,
  setSelectedId,
  setSelected
} from "../redux-saga/actions/action";
import { IconButton } from "@material-ui/core";
import Icon, { CloseIcon, ArrowBackIcon } from "../style/icons";
import { theme } from "../style/theme";

const Container = styled.div`
  flex: 1;
  border-radius: 4px;
  background-color: ${theme.colors.secondary};
  margin: 20px;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-bottom: 1px solid ${theme.colors.darkerFont};
`;

const Paper = styled.div`
  padding: 15px;
  border-bottom: 1px solid ${theme.colors.primary}70;
`;

const propTypes = {
  comments: PropTypes.shape({}),
  getCommentsAction: PropTypes.func.isRequired,
  setSelectedIdAction: PropTypes.func.isRequired,
  setSelectedAction: PropTypes.func.isRequired
};

const defaultProps = {
  comments: {}
};

const Comments = ({
  comments,
  getCommentsAction,
  setSelectedIdAction,
  setSelectedAction
}) => {
  const handleClick = (kids, id) => {
    setSelectedIdAction(id);
    getCommentsAction(kids, id);
  };
  const backClick = () => {
    // setSelectedIdAction(comments[0].parent);
    //TODO
  };
  const closeClick = () => {
    setSelectedAction(null);
    setSelectedIdAction(null);
  };
  return (
    <Container>
      <Header>
        <IconButton onClick={backClick}>
          <Icon
            IconElement={ArrowBackIcon}
            color={theme.colors.font}
            width={30}
            height={30}
          />
        </IconButton>
        <Title>Comments</Title>
        <IconButton onClick={closeClick}>
          <Icon
            IconElement={CloseIcon}
            color={theme.colors.font}
            width={30}
            height={30}
          />
        </IconButton>
      </Header>
      {Object.keys(comments).map(id => {
        const comment = comments[id];
        return (
          <Paper>
            <Comment
              id={comment.id}
              author={comment.by}
              text={comment.text}
              date={comment.time}
              loadResponses={handleClick}
              responsesId={comment.kids}
            />
          </Paper>
        );
      })}
    </Container>
  );
};

Comments.propTypes = propTypes;
Comments.defaultProps = defaultProps;

const mapStateToProps = state => {
  const id = state.comments.selectedId || state.comments.selectedStoryId;
  return {
    comments: state.comments[id]
  };
};

const mapDispatchToProps = {
  getCommentsAction: getComments,
  setSelectedIdAction: setSelectedId,
  setSelectedAction: setSelected
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
