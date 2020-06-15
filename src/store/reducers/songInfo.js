export const songInfo = (state={}, action) => {
  switch (action.type){
    case "SONG":
      return action.payload;
    default:
      return state;
  };
};