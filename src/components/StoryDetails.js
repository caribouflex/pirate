import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "../style/basic";

const Bottom = styled.h1`
  display: flex;
  flex-direction: row;
  margin: 10px;
  font-size: 1rem;
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 25px;
  border: 1px solid #efefef;
  margin: auto;
  padding: 4px;
`;

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BottomData = styled.div`
  margin: auto 0 auto 10px;
  margin-left: 15px;
  font-style: italic;
`;

const propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  loadComments: PropTypes.func.isRequired,
  commentsCount: PropTypes.number.isRequired
};

const defaultProps = {};

const StoryDetails = ({ author, date, loadComments, commentsCount }) => {
  return (
    <Bottom>
      <AuthorContainer>
        <Avatar
          src={`https://avatars.dicebear.com/v2/identicon/${author}.svg`}
          alt="avatar"
        />
        <BottomData>{author}</BottomData>
      </AuthorContainer>
      <BottomData>{new Date(date).toDateString()}</BottomData>
      <BottomData>
        <Link onClick={loadComments}>{commentsCount} comments...</Link>
      </BottomData>
    </Bottom>
  );
};

StoryDetails.propTypes = propTypes;
StoryDetails.defaultProps = defaultProps;

export default StoryDetails;
