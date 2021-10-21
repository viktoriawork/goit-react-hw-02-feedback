import React from "react";
import PropTypes from "prop-types";
import Styles from "./FeedbackOptions.module.css";
const FeedbackOptions = (props) => {
  const { onLeaveFeedback, options } = props;
  return (
    <ul>
      {options.map((option) => (
        <li key={option}>
          <button type="button"
            className={Styles.btnReview}
            onClick={() => onLeaveFeedback(option)}
            name = {option}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array,
};
export default FeedbackOptions;
