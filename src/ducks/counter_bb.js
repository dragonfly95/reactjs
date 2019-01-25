//Actions
const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

// Action creators
export const incrementCounter = () => ({
  type: COUNTER_INCREMENT
});

export const decrementCounter = () => ({
  type: COUNTER_DECREMENT
});

// reducers
export default (state = 0, action) => {
  // debugger
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    case COUNTER_DECREMENT:
      return state -1;
    default:
      return state;

  }
}


// selectors
export const getCounter = state => {

  // reducer에 정의된 값들 ...........
  return state.counter_bbbbbbbbbbbbbbbbbbbbbbb;
}