import React from "react";
import PropTypes from "prop-types";

const ThumbUpIcon = () => (
  <g id="thumb-up">
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
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
export { ThumbUpIcon };

// #endregion
