export const repeatIndex = (state="-650px -627px", action)=>{
  switch (action.type){
    case "REPEAT":
      if(state === "-650px -627px"){
        return "-688px -34px";
      }else if(state === "-688px -34px"){
        return "-620px -627px";
      }else{
        return "-650px -627px";
      }
    default:
      return state;
  }
};