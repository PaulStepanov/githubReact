import PropTypes from "prop-types";

export const LANGUAGE_PROP_TYPES = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    percents: PropTypes.number.isRequired
  })
).isRequired;
