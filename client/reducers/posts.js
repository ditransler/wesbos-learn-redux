// A reducer takes in two things:

// 1. The action (info about what happened)
// 2. A copy of current state

function posts(state = [], action) {
    console.log(state, action);
    return state;
}

export default posts;