import { legacy_createStore as createStore } from "redux";

const counterFunction = (state = { counter: 10 }, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "ADDBY") {
    return { counter: state.counter + 10 };
  }
  return state;
};

const store = createStore(counterFunction);

export default store;
