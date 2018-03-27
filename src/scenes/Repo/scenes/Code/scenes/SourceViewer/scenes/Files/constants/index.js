import PropTypes from "prop-types";

export const FILE_PROP_TYPE_SHAPE = PropTypes.shape({
  isDirectory: PropTypes.bool,
  name: PropTypes.string.isRequired,
  lastCommit: PropTypes.string.isRequired,
  lastCommitAgoText: PropTypes.string.isRequired,
  onClick: PropTypes.func
});
