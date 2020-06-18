export const mkList = (state = [], action) => {
    switch(action.type) {
        case "ADD_ID":
            if(state.includes(action.payload)){
                let tmp = [...state];
                for( var i = 0; i < tmp.length; i++){ 
                    if ( tmp[i] === action.payload) { 
                        tmp.splice(i, 1); i--; 
                    }
                }
                return tmp;
            }else{
                return [...state, action.payload];
            }
        default:
            return state;
    }
}