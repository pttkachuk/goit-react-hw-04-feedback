import React, { useState } from 'react'
import Section from './Section/Section';
import FeedbackOption from './Feedback Options/FeedbackOption';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good': setGood(prevState => prevState + 1);
        break;
      case 'bad': setBad(prevState => prevState + 1);
        break;
      case 'neutral': setNeutral(prevState => prevState + 1);
        break;
      default: return;
    }
  };

  const TotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = TotalFeedback();
    return Math.round((good / total) * 100);
  };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={Object.keys({good, bad, neutral})}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
          <Section title="Statistics">
        {TotalFeedback() ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={TotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
      </>
    );
  
}

