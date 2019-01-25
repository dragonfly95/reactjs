import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as fromCounter from '../ducks/counter_bb';


function AppCounter ({counter_aaaaaaaaaaa, decrementCounter, incrementCounter}) {
  return (
    <div>
      <div>{counter_aaaaaaaaaaa}</div>
      <button onClick={decrementCounter}>-</button>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}


AppCounter.propTypes = {
  counter_aaaaaaaaaaa: PropTypes.number.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  incrementCounter: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    counter_aaaaaaaaaaa: fromCounter.getCounter(state),
  }),
  {
    decrementCounter: fromCounter.decrementCounter,
    incrementCounter: fromCounter.incrementCounter,
  },
)(AppCounter);