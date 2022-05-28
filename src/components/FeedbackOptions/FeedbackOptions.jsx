import PropTypes from 'prop-types';

import './feedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const elements = options.map((el, idx) => (
    <button key={idx} type="button" onClick={() => onLeaveFeedback(el)}>
      {el}
    </button>
  ));
  return <>{elements}</>;
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
