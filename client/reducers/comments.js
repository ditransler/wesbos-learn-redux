// A reducer takes in two things:

// 1. The action (info about what happened)
// 2. A copy of current state

function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            // Return the new state with the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            debugger
            // We need to return the new state withour the deleted comment
            return [
                // From the start to the one we want to delete
                ...state.slice(0, action.i),
                // After the deleted one to the end
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // Take the current state
            ...state,
            // Overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;