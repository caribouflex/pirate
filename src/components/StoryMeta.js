import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import KidNavigation from "./KidNavigation";

const Bottom = styled.h1`
  display: flex;
  flex-direction: row;
  margin: auto;
  font-size: 1rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  loadComments: PropTypes.func.isRequired,
  commentsCount: PropTypes.number.isRequired
};

const StoryMeta = ({ author, date, loadComments, commentsCount }) => {
  return (
    <Bottom>
      <UserDetails author={author} date={date} />
      <KidNavigation
        kidsCount={commentsCount}
        loadKids={loadComments}
        text={commentsCount > 1 ? "comments" : "comment"}
      />
    </Bottom>
  );
};

StoryMeta.propTypes = propTypes;

export default React.memo(StoryMeta);
