// 2. step
// creating reducers
//  reducer Will check which action has been dispatched and then modify the state
const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};
export default counter;