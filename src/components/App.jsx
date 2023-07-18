import React, { Component } from 'react'
import Section from './Section/Section';
import FeedbackOption from './Feedback Options/FeedbackOption';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }; 

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percent = (good * 100) / total;
    return Math.round(percent);
  };

  onLeaveFeedback = (event) => {
    const name = event.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }))
  };

  render() {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();
      const objKey = Object.keys(this.state);
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={objKey}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification message='No feedback given' />
        ) : (
          <Section title='Statistics'>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </>
    );
  }
}

