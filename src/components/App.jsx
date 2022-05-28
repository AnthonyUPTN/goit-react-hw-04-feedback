import { useState } from 'react';

import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

const options = ['good', 'neutral', 'bad'];

export const App = () => {
  const [optionsVariables, setOptionsVariables] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = optionsVariables;

  const onLeaveFeedback = propertyName => {
    setOptionsVariables(prevState => {
      console.log(prevState);
      return {
        ...optionsVariables,
        [propertyName]: prevState[propertyName] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    return Number(((good / countTotalFeedback()) * 100).toFixed());
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() && (
          <Notification message="There is no positive feedback" />
        )}
        {countTotalFeedback() > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedback()}
          />
        )}
      </Section>
    </>
  );
};

// export default App;

// class App extends Component {

// }

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = propertyName => {
//     this.setState(prevState => {
//       return {
//         [propertyName]: prevState[propertyName] + 1,
//       };
//     });
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedback() {
//     const { good } = this.state;
//     return Number(((good / this.countTotalFeedback()) * 100).toFixed());
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countPositiveFeedback();

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {!total && <Notification message="There is no positive feedback" />}
//           {total > 0 && (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedback()}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

export default App;
