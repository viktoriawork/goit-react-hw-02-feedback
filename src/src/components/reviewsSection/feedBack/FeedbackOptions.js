import React from "react";
import PropTypes from "prop-types";
import Styles from "./FeedbackOptions.module.css";
const FeedbackOptions = (props) => {
  const { onLeaveFeedback, options } = props;
  return (
    <ul>
      {options.map((option) => (
        <li key={option}>
          <button
            className={Styles.btnReview}
            onClick={() => onLeaveFeedback(option)}
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
};
export default FeedbackOptions;
