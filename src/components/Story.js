import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "../style/basic";
import StoryDetails from "./StoryDetails";
import Score from "./Score";
import { theme } from "../style/theme";

const Container = styled.div`
  color: ${({ selected }) => {
    return !selected ? theme.colors.font : theme.colors.secondary;
  }}
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 1.6rem;
`;

const propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  showComments: PropTypes.func.isRequired,
  commentsId: PropTypes.arrayOf(PropTypes.number),
  selected: PropTypes.bool.isRequired
};

const defaultProps = {
  commentsId: []
};

const Story = ({
  id,
  author,
  title,
  link,
  date,
  score,
  commentsCount,
  showComments,
  commentsId,
  selected
}) => {
  const handleClick = () => {
    showComments(commentsId, id);
  };
  return (
    <Container selected={selected}>
      <Left>
        <Title>
          <Link href={link} target="_blank" dark={selected}>
            {title}
          </Link>
        </Title>
        <StoryDetails
          author={author}
          date={date}
          loadComments={handleClick}
          commentsCount={commentsCount}
        />
      </Left>
      <Score score={score} />
    </Container>
  );
};

Story.propTypes = propTypes;
Story.defaultProps = defaultProps;

export default Story;
