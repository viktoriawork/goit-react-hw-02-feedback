import React from "react";
import Styles from "./Statistics.module.css";
import PropTypes from "prop-types";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
 
  return (
    <>
      <ul className="Statistics">
        {total ? (
          <ul>
            <li className={Styles.li}>
              good: <span>{good}</span>
            </li>

            <li className={Styles.li}>
              Neutral: <span>{neutral}</span>
            </li>
            <li className={Styles.li}>
              Bad: <span>{bad}</span>
            </li>
            <li className={Styles.li}>
              total: <span>{total}</span>
            </li>
            <li className={Styles.li}>
              Positive Feedback: <span>{positivePercentage + "%"}</span>
            </li>
          </ul>
        ) : (
          <li className={Styles.li}>No feedback given</li>
        )}
      </ul>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
 neutral:PropTypes.number,
 bad: PropTypes.number,
total: PropTypes.number,
positivePercentage: PropTypes.number,

};

export default Statistics;
