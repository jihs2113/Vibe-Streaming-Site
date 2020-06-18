export const songIndex = (state=0, action) => {
  switch (action.type){
    case "SONGINDEX":
      return action.payLoad;
    case "GETSONGINDEX":
      return state;
    default:
      return state;
  };
};