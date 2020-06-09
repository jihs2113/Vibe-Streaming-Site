// 리듀서는 값을 리턴하는 함수이다.
const initialState = 1;


export const navList = (state = initialState, action) => {
    switch(action.type) {
        case "NAV_ACTIVE":
            return action.payload
        default:
            return state;
    }
};