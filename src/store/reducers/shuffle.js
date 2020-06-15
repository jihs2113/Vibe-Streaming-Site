export const shuffleIndex = (state="-560px -627px", action)=>{
  switch (action.type){
    case "SHUFFLE":
      if(state === "-560px -627px"){
        return "-470px -627px"
      }else{
        return "-560px -627px"
      }
    default:
      return state;
  }
};