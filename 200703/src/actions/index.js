// step 1.
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
const changeName = (name) => {
  return {
    type: "CHANGE_NAME",
    payload: name,
  };
};
export { increment, decrement, changeName };
