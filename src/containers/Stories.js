import React from "react";
import PropTypes from "prop-types";
import Story from "../components/Story";
import { connect } from "react-redux";

const propTypes = {
  stories: PropTypes.shape({})
};

const defaultProps = {
  stories: {}
};

const Stories = ({ storiesIds, stories }) => {
  return (
    <div>
      {stories &&
        Object.keys(stories).map(id => {
          const story = stories[id];
          return (
            <Story
              key={id}
              title={story.title}
              link={story.url}
              date={story.time}
              author={story.by}
              score={story.score}
            />
          );
        })}
    </div>
  );
};

Stories.propTypes = propTypes;
Stories.defaultProps = defaultProps;

const mapStateToProps = state => {
  return { stories: state.stories.byId };
};

export default connect(mapStateToProps)(Stories);
