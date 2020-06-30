// first step
// action what you want to do

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
const login = () => {
    return {
        type: "LOGIN",
    };
};

export { increment, decrement, login };