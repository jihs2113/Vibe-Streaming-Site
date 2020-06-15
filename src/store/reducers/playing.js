export const playing = (state=false, action) => {
  switch (action.type){
    case "PLAYING":
      return !state;
    default:
      return state;
  };
};