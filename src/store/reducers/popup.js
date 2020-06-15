export const popup = (state=true, action) => {
  switch (action.type){
    case "POPUP":
      return !state;
    default:
      return state;
  };
};