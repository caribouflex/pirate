import React from "react";
import PropTypes from "prop-types";

const ThumbUpIcon = () => (
  <g id="thumb-up">
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
  </g>
);

const ArrowBackIcon = () => (
  <g id="arrow-back">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </g>
);

const CloseIcon = () => (
  <g id="close">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </g>
);

const ChatIcon = () => (
  <g id="chat">
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
  </g>
);

const propTypes = {
  // Allow overriding style.
  className: PropTypes.string,
  // The color of the Icon.
  color: PropTypes.string,
  // The height of the Icon.
  height: PropTypes.number,
  // The Icon element that will be displayed.
  IconElement: PropTypes.func,
  // The width of the Icon.
  width: PropTypes.number
};

const defaultProps = {
  className: "",
  color: "#fffffff",
  height: 24,
  IconElement: null,
  width: 24
};

/**
 * This is the wrapper function used to instantiate the icon.
 *
 * @param {Func} IconElement The React Icon that will be displayed.
 * @param {Object} props All the other props.
 * @param {Number} props.width The width of the Icon.
 * @param {Number} props.height The height of the Icon.
 * @param {String} props.color The color of the Icon.
 */
const Icon = ({ className, IconElement, color, height, width }) => (
  <svg
    className={className}
    fill={color}
    height={height}
    width={width}
    viewBox="0 0 24 24"
  >
    <IconElement />
  </svg>
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
export { ThumbUpIcon, ArrowBackIcon, CloseIcon, ChatIcon };

// #endregion
