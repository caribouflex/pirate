import React from "react";
import PropTypes from "prop-types";
import Story from "../components/Story";
import { connect } from "react-redux";
import {
  getComments,
  setSelectedId,
  setSelectedStory,
  getStories
} from "../redux-saga/actions";
import { Paper, Button } from "@material-ui/core";
import styled from "styled-components";
import { theme } from "../style/theme";
import Loader from "../components/Loader";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledButton = styled(Button)`
  color: ${theme.colors.accent} !important;
  border-color: ${theme.colors.accent} !important;
  margin: auto !important;
`;

const PaperStyled = styled(Paper)`
  padding: 20px;
  margin: 20px;
  background-color: ${({ selected }) => {
    return !selected ? theme.colors.secondary : theme.colors.darkAccent;
  }} !important;
`;

const propTypes = {
  getCommentsAction: PropTypes.func.isRequired,
  getStoriesAction: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  stories: PropTypes.shape({}),
  storiesId: PropTypes.arrayOf(PropTypes.number),
  setSelectedIdAction: PropTypes.func.isRequired,
  setSelectedStoryAction: PropTypes.func.isRequired,
  selectedStoryId: PropTypes.string
};

const defaultProps = {
  stories: {},
  loading: false,
  storiesId: [],
  selectedStoryId: undefined
};

const Stories = ({
  getCommentsAction,
  getStoriesAction,
  setSelectedIdAction,
  setSelectedStoryAction,
  stories,
  loading,
  selectedStoryId,
  allCommentsId
}) => {
  const handleClick = (kids, id) => {
    setSelectedIdAction(id);
    setSelectedStoryAction(id);
    if (!allCommentsId.includes(id)) {
      getCommentsAction(kids, id, null);
    }
  };
  return (
    <Container>
      {stories &&
        Object.keys(stories).map(id => {
          const story = stories[id];
          return (
            <PaperStyled
              key={id}
              elevation={2}
              selected={selectedStoryId && selectedStoryId === id}
            >
              <Story
                id={id}
                title={story.title}
                link={story.url}
                date={story.time}
                author={story.by}
                score={story.score}
                commentsCount={story.descendants}
                showComments={handleClick}
                commentsId={story.kids}
                selected={selectedStoryId ? selectedStoryId === id : false}
              />
            </PaperStyled>
          );
        })}
      <StyledButton variant="outlined" onClick={getStoriesAction}>
        Load More <Loader visible={loading} />
      </StyledButton>
    </Container>
  );
};

Stories.propTypes = propTypes;
Stories.defaultProps = defaultProps;

const mapDispatchToProps = {
  getCommentsAction: getComments,
  setSelectedIdAction: setSelectedId,
  setSelectedStoryAction: setSelectedStory,
  getStoriesAction: getStories
};

const mapStateToProps = state => {
  return {
    stories: state.stories.byId,
    selectedStoryId: state.stories.selectedStoryId,
    loading: state.stories.loading,
    allCommentsId: state.comments.allIds
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
