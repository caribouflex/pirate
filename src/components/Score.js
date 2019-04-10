import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon, { ThumbUpIcon } from "../style/icons";
import { theme } from "../style/theme";

const ScoreZone = styled.div`
  margin: auto;
  color: ${theme.colors.accent};
`;

const propTypes = {
  score: PropTypes.number.isRequired
};

const Score = ({ score }) => {
  return (
    <ScoreZone>
      <Icon color={theme.colors.accent} IconElement={ThumbUpIcon} />
      <div>{score}</div>
    </ScoreZone>
  );
};

Score.propTypes = propTypes;

export default React.memo(Score);
