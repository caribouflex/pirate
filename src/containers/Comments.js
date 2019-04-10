import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import Comment from "../components/Comment";
import {
  getComments,
  setSelectedId,
  setSelectedStory
} from "../redux-saga/actions";
import { IconButton } from "@material-ui/core";
import Icon, { CloseIcon, ArrowBackIcon } from "../style/icons";
import { theme } from "../style/theme";

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
  }
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
  parentId: PropTypes.number,
  setSelectedIdAction: PropTypes.func.isRequired,
  setSelectedStoryAction: PropTypes.func.isRequired,
  allCommentsId: PropTypes.arrayOf(PropTypes.string)
};

const defaultProps = {
  comments: {},
  parentId: null,
  allCommentsId: []
};

const Comments = ({
  comments,
  getCommentsAction,
  setSelectedIdAction,
  setSelectedStoryAction,
  parentId,
  allCommentsId
}) => {
  const handleClick = (kids, id, parentId) => {
    setSelectedIdAction(id);
    if (!allCommentsId.includes(id)) {
      getCommentsAction(kids, id, parentId);
    }
  };
  const backClick = () => {
    setSelectedIdAction(parentId);
  };
  const closeClick = () => {
    setSelectedStoryAction(null);
    setSelectedIdAction(null);
  };
  return (
    <Container visible={Object.keys(comments).length > 0}>
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
  const obj = state.comments.byId && state.comments.byId[id];

  return {
    parentId: obj && obj.parent,
    comments: obj && obj.childrens,
    allCommentsId: state.comments.allIds
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
