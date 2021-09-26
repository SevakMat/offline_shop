import {array} from "../db/db"


function getItem(code){

  for(let i =0;i<array.length;i++){
    if(array[i].code === code){
      return array[i]
    }else{
      console.log("chka nman ban ");
    }
  }
}

export default getItem