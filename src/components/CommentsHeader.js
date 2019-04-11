import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import Icon, { ArrowBackIcon, CloseIcon } from "../style/icons";
import { theme } from "../style/theme";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-bottom: 1px solid ${theme.colors.darkerFont};
`;

const IconButtonStyled = styled(IconButton)`
  ${({ hidden }) => {
    return hidden ? "display:none !important;" : "display:block;";
  }}
`;

const Title = styled.h1`
  font-size: 1.3rem;
  flex: 1;
`;

const propTypes = {
  onBackClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  parentId: PropTypes.number
};

const defaultProps = {
  parentId: -1
};

const CommentsHeader = ({ onBackClick, onCloseClick, parentId }) => {
  return (
    <Header>
      <IconButtonStyled onClick={onBackClick} hidden={parentId === -1}>
        <Icon
          IconElement={ArrowBackIcon}
          color={theme.colors.font}
          width={30}
          height={30}
        />
      </IconButtonStyled>
      <Title>Comments</Title>
      <IconButton onClick={onCloseClick}>
        <Icon
          IconElement={CloseIcon}
          color={theme.colors.font}
          width={30}
          height={30}
        />
      </IconButton>
    </Header>
  );
};

CommentsHeader.propTypes = propTypes;
CommentsHeader.defaultProps = defaultProps;

export default React.memo(CommentsHeader);
// for tests
export { Header, IconButtonStyled };
