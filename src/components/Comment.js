import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CommentDetails from "./CommentDetails";
import { Link } from "../style/basic.js";
import { theme } from "../style/theme";

const Container = styled.div`
  color: ${theme.colors.font};
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  font-style: italic;
`;

const CommentText = styled.article`
  padding: 10px 0;
`;

const propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  loadResponses: PropTypes.func.isRequired,
  responsesId: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  responsesId: []
};

const Comment = ({
  id,
  author,
  text,
  date,
  loadResponses,
  responsesId,
  storyId
}) => {
  const handleClick = () => {
    loadResponses(responsesId, id);
  };
  return (
    <Container>
      <CommentDetails
        author={author}
        date={date}
        loadComments={handleClick}
        commentsCount={responsesId && responsesId.length}
      />
      <CommentText dangerouslySetInnerHTML={{ __html: text }} />
      <StyledLink onClick={handleClick}>
        {responsesId && responsesId.length}{" "}
        {responsesId.length > 1 ? "responses" : "response"}
      </StyledLink>
    </Container>
  );
};

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
