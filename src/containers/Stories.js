import React from "react";
import PropTypes from "prop-types";
import Story from "../components/Story";
import { connect } from "react-redux";
import {
  getComments,
  setSelectedId,
  setSelected
} from "../redux-saga/actions/action";
import { Paper } from "@material-ui/core";
import styled from "styled-components";
import { theme } from "../style/theme";

const Container = styled.div`
  padding: 20px;
  flex: 1;
`;

const PaperStyled = styled(Paper)`
  padding: 20px;
  margin: 20px;
  background-color: ${({ selected }) => {
    return !selected ? theme.colors.secondary : theme.colors.darkAccent;
  }} !important;
`;

const propTypes = {
  stories: PropTypes.shape({}),
  loading: PropTypes.bool,
  storiesId: PropTypes.arrayOf(PropTypes.number),
  getCommentsAction: PropTypes.func.isRequired,
  setSelectedIdAction: PropTypes.func.isRequired,
  setSelectedAction: PropTypes.func.isRequired,
  selectedStoryId: PropTypes.string
};

const defaultProps = {
  stories: {},
  loading: false,
  storiesId: [],
  selectedStoryId: null
};

const Stories = ({
  storiesIds,
  getCommentsAction,
  setSelectedIdAction,
  setSelectedAction,
  stories,
  loading,
  selectedStoryId
}) => {
  const handleClick = (kids, id) => {
    setSelectedIdAction(id);
    setSelectedAction(id);
    getCommentsAction(kids, id);
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
                selected={selectedStoryId && selectedStoryId === id}
              />
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
  setSelectedIdAction: setSelectedId,
  setSelectedAction: setSelected
};

const mapStateToProps = state => {
  return {
    stories: state.stories.byId,
    selectedStoryId: state.stories.selectedStoryId,
    loading: state.stories.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
