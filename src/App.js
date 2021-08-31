import React, { Component } from "react";
import FeedbackOptions from "./components/reviewsSection/feedBack/FeedbackOptions";
import Statistics from "./components/reviewsSection/statistics/Statistics";
import Section from "./components/Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = (name) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
 
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
  
    const resSum = Math.floor((this.state.good * 100) / this.countTotalFeedback());
    return resSum;
  };

  render() {
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={["good", "neutral", "bad"]}
          />
        </Section>
        <Section title={"Statistics"}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
