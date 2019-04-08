import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Details from "./Details";

const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
`;

const Content = styled.article``;

const propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  loadResponses: PropTypes.func.isRequired,
  responsesId: PropTypes.arrayOf(PropTypes.string)
};

const defaultProps = {
  responsesId: []
};

const Comment = ({ id, author, text, date, loadResponses, responsesId }) => {
  const handleClick = () => {
    loadResponses(responsesId, id);
  };
  return (
    <Container>
      <Content dangerouslySetInnerHTML={{ __html: text }} />
      <Details
        author={author}
        date={date}
        loadComments={handleClick}
        commentsCount={responsesId && responsesId.length}
      />
    </Container>
  );
};

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
