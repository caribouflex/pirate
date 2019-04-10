import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "./Link";
import Icon, { ChatIcon } from "../style/icons";
import { theme } from "../style/theme";

const StyledIcon = styled(Icon)`
  margin: 10px;
`;

const propTypes = {
  disabled: PropTypes.bool.isRequired,
  kidsCount: PropTypes.number.isRequired,
  loadKids: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const defaultProps = {};

const KidNavigation = ({ loadKids, kidsCount, text, disabled }) => {
  return (
    <Link onClick={loadKids} disabled={disabled}>
      <StyledIcon IconElement={ChatIcon} color={theme.colors.accent} />
      {kidsCount} {text}
    </Link>
  );
};

KidNavigation.propTypes = propTypes;
KidNavigation.defaultProps = defaultProps;

export default KidNavigation;
