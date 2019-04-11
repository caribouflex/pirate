import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "./Link";
import StoryMeta from "./StoryMeta";
import Score from "./Score";
import { theme } from "../style/theme";

const Container = styled.div`
  color: ${({ selected }) => {
    return !selected ? theme.colors.font : theme.colors.secondary;
  }}
  display: flex;
  flex-direction: row;
  border-radius: 4px;

  padding: 20px;
  margin: 20px;
  background-color: ${({ selected }) => {
    return !selected ? theme.colors.secondary : theme.colors.darkAccent;
  }};
`;

const Left = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 1.6rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const propTypes = {
  id: PropTypes.number.isRequired,
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

class Story extends React.PureComponent {
  handleClick = () => {
    const { id, showComments, commentsId } = this.props;
    showComments(commentsId, id);
  };

  render() {
    const {
      author,
      title,
      link,
      date,
      score,
      commentsCount,
      selected
    } = this.props;
    return (
      <Container selected={selected}>
        <Left>
          <Title>
            <Link href={link} target="_blank" dark={selected}>
              {title}
            </Link>
          </Title>
          <StoryMeta
            author={author}
            date={date}
            loadComments={this.handleClick}
            commentsCount={commentsCount}
          />
        </Left>
        <Score score={score} />
      </Container>
    );
  }
}

Story.propTypes = propTypes;
Story.defaultProps = defaultProps;

export default Story;
