import React from "react";
import PropTypes from "prop-types";
import Story from "../components/Story";
import { connect } from "react-redux";
import { getComments, setSelectedStory } from "../redux-saga/actions/action";
import { Title } from "../style/basic";
import { Paper } from "@material-ui/core";
import styled from "styled-components";

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
  stories: PropTypes.shape({}),
  loading: PropTypes.bool
};

const defaultProps = {
  stories: {},
  loading: false
};

const Stories = ({
  storiesIds,
  getCommentsAction,
  setSelectedStoryAction,
  stories,
  loading
}) => {
  const handleClick = (kids, id) => {
    setSelectedStoryAction(id);
    getCommentsAction(kids, id);
  };
  return (
    <Container>
      <Title>Top Stories</Title>
      {stories &&
        Object.keys(stories).map(id => {
          const story = stories[id];
          return (
            <PaperStyled key={id} elevation={2}>
              <Story
                title={story.title}
                link={story.url}
                date={story.time}
                author={story.by}
                score={story.score}
                commentsCount={story.descendants}
                showComments={handleClick}
                commentsId={story.kids}
              />
              {/* <button onClick={() => handleClick(story.kids, id)}>
                Load comments
              </button> */}
            </PaperStyled>
          );
        })}
      {loading && <p>Loading...</p>}
    </Container>
  );
};

Stories.propTypes = propTypes;
Stories.defaultProps = defaultProps;

const mapDispatchToProps = {
  getCommentsAction: getComments,
  setSelectedStoryAction: setSelectedStory
};

const mapStateToProps = state => {
  return {
    stories: state.stories.byId,
    loading: state.stories.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
