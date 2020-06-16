export const popup = (state=false, action) => {
  switch (action.type){
    case "POPUP":
      return !state;
    default:
      return state;
  };
};