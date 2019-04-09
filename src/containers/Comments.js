import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import Comment from "../components/Comment";
import {
  getComments,
  setSelectedId,
  setSelectedStory
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

const IconButtonStyled = styled(IconButton)`
  ${({ hidden }) => {
    return hidden ? "display:none !important;" : "display:block;";
  }}
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
  setSelectedAction: PropTypes.func.isRequired,
  parentId: PropTypes.string
};

const defaultProps = {
  comments: {},
  parentId: null
};

const Comments = ({
  comments,
  getCommentsAction,
  setSelectedIdAction,
  setSelectedStoryAction,
  parentId
}) => {
  const handleClick = (kids, id, parentId) => {
    setSelectedIdAction(id);
    getCommentsAction(kids, id, parentId);
  };
  const backClick = () => {
    console.log("backClick", parentId);
    setSelectedIdAction(parentId);
  };
  const closeClick = () => {
    setSelectedStoryAction(null);
    setSelectedIdAction(null);
  };
  return (
    <Container>
      <Header>
        <IconButtonStyled onClick={backClick} hidden={parentId === null}>
          <Icon
            IconElement={ArrowBackIcon}
            color={theme.colors.font}
            width={30}
            height={30}
          />
        </IconButtonStyled>
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
        console.log("COMMENT", comment, id);
        return (
          <Paper key={comment.id}>
            <Comment
              id={comment.id}
              author={comment.by}
              text={comment.text}
              date={comment.time}
              loadResponses={handleClick}
              responsesId={comment.kids}
              parent={comment.parent}
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
  const obj = state.comments[id];
  return {
    parentId: obj && obj.parent,
    comments: obj && obj.childrens
  };
};

const mapDispatchToProps = {
  getCommentsAction: getComments,
  setSelectedIdAction: setSelectedId,
  setSelectedStoryAction: setSelectedStory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
