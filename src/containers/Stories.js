import React from "react";
import PropTypes from "prop-types";
import Story from "../components/Story";
import { connect } from "react-redux";
import {
  getComments,
  setSelectedComment,
  setSelectedStory,
  getStories
} from "../redux-saga/actions";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { theme } from "../style/theme";
import Loader from "../components/Loader";
import {
  selectStories,
  selectSelectedStoryId,
  selectStoryLoading,
  selectAllCommentsId
} from "../redux-saga/selectors";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledButton = styled(Button)`
  color: ${theme.colors.accent} !important;
  border-color: ${theme.colors.accent} !important;
  margin-left: auto !important;
  margin-right: auto !important;
`;

const propTypes = {
  getCommentsAction: PropTypes.func.isRequired,
  getStoriesAction: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  stories: PropTypes.shape({}),
  storiesId: PropTypes.arrayOf(PropTypes.number),
  setSelectedCommentAction: PropTypes.func.isRequired,
  setSelectedStoryAction: PropTypes.func.isRequired,
  selectedStoryId: PropTypes.string
};

const defaultProps = {
  stories: {},
  loading: false,
  storiesId: [],
  selectedStoryId: undefined
};

class Stories extends React.PureComponent {
  handleClick = (kids, id) => {
    const {
      getCommentsAction,
      setSelectedCommentAction,
      setSelectedStoryAction,
      allCommentsId
    } = this.props;
    setSelectedCommentAction(id);
    setSelectedStoryAction(id);
    if (!allCommentsId.includes(id)) {
      getCommentsAction(kids, id, null);
    }
  };

  render() {
    console.log("RE-RENDER STORIES");
    const { getStoriesAction, stories, loading, selectedStoryId } = this.props;
    return (
      <Container>
        {stories &&
          Object.keys(stories).map(id => {
            const story = stories[id];
            return (
              <Story
                id={id}
                key={id}
                title={story.title}
                link={story.url}
                date={story.time}
                author={story.by}
                score={story.score}
                commentsCount={story.descendants}
                showComments={this.handleClick}
                commentsId={story.kids}
                selected={selectedStoryId ? selectedStoryId === id : false}
              />
            );
          })}
        <StyledButton variant="outlined" onClick={getStoriesAction}>
          Load More <Loader visible={loading} />
        </StyledButton>
      </Container>
    );
  }
}

Stories.propTypes = propTypes;
Stories.defaultProps = defaultProps;

const mapDispatchToProps = {
  getCommentsAction: getComments,
  setSelectedCommentAction: setSelectedComment,
  setSelectedStoryAction: setSelectedStory,
  getStoriesAction: getStories
};

const mapStateToProps = state => {
  return {
    stories: selectStories(state),
    selectedStoryId: selectSelectedStoryId(state),
    loading: selectStoryLoading(state),
    allCommentsId: selectAllCommentsId(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
