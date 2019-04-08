import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon, { ThumbUpIcon } from "../style/icons";
import { Link } from "../style/basic";
import Details from "./Details";

const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  flex: 1;
`;

const ScoreZone = styled.div`
  margin: auto;
  color: #4281e6;
`;

const Title = styled.h1`
  font-size: 1.6rem;
`;

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
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  showComments: PropTypes.func.isRequired,
  commentsId: PropTypes.arrayOf(PropTypes.string)
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
  commentsId
}) => {
  const handleClick = () => {
    showComments(commentsId, id);
  };
  return (
    <Container>
      <Left>
        <Title>
          <Link href={link} target="_blank">
            {title}
          </Link>
        </Title>
        <Details
          author={author}
          date={date}
          loadComments={handleClick}
          commentsCount={commentsCount}
        />
      </Left>
      <ScoreZone>
        <Icon color="#4281e6" IconElement={ThumbUpIcon} />
        <div>{score}</div>
      </ScoreZone>
    </Container>
  );
};

Story.propTypes = propTypes;
Story.defaultProps = defaultProps;

export default Story;
