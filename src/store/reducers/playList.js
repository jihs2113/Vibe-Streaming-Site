const initialState = [];

export const playList = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_PLAYLIST":
            return [...state, action.payload]
        default:
            return state;
    }
}