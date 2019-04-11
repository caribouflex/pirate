import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import { theme } from "../style/theme";
import KidNavigation from "./KidNavigation";

const Container = styled.div`
  color: ${theme.colors.font};
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-bottom: 1px solid ${theme.colors.primary}70;
`;

const CommentText = styled.article`
  padding: 10px 0;
  word-wrap: break-word;
`;

const propTypes = {
  author: PropTypes.string,
  date: PropTypes.number,
  id: PropTypes.number.isRequired,
  loadResponses: PropTypes.func.isRequired,
  parent: PropTypes.number,
  responsesId: PropTypes.arrayOf(PropTypes.number),
  text: PropTypes.string
};

const defaultProps = {
  date: undefined,
  responsesId: [],
  parent: null,
  author: "",
  text: ""
};

const Comment = ({
  id,
  author,
  text,
  date,
  loadResponses,
  responsesId,
  parent
}) => {
  const handleClick = () => {
    loadResponses(responsesId, id, parent);
  };
  return (
    <Container>
      <UserDetails author={author} date={date} />
      <CommentText dangerouslySetInnerHTML={{ __html: text }} />
      <KidNavigation
        disabled={responsesId.length === 0}
        loadKids={handleClick}
        kidsCount={responsesId.length}
        text={responsesId.length > 1 ? " responses" : " response"}
      />
    </Container>
  );
};

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
//used for tests
export { CommentText };
