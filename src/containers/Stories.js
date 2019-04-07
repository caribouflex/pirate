import React from "react";
import PropTypes from "prop-types";
import Story from "../components/Story";
import { connect } from "react-redux";
import { getComments } from "../redux-saga/actions/action";

const propTypes = {
  stories: PropTypes.shape({})
};

const defaultProps = {
  stories: {}
};

const Stories = ({ storiesIds, getComments, stories }) => {
  return (
    <div>
      {stories &&
        Object.keys(stories).map(id => {
          const story = stories[id];
          return (
            <div key={id}>
              <Story
                title={story.title}
                link={story.url}
                date={story.time}
                author={story.by}
                score={story.score}
              />
              <button onClick={() => getComments(story.kids, id)}>
                Load comments
              </button>
            </div>
          );
        })}
    </div>
  );
};

Stories.propTypes = propTypes;
Stories.defaultProps = defaultProps;

const mapDispatchToProps = {
  getComments: getComments
};

const mapStateToProps = state => {
  return { stories: state.stories.byId };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
