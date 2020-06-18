export const songList = (state=[], action) => {
  switch (action.type){
    case "SONGLIST":
      return action.payLoad;
    case "GETSONGLIST":
      return state;
    default:
      return state;
  };
};