import {createStore} from "redux" 


const Store = createStore(function(state,action){
  if(action.type === "changeName"){
    return{
      ...state,
      isLogin:{
        check:action.payload
      }
    }
  }

  return state
},{
  price:{
    check:0
  }
}) 

export default Store;