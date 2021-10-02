import {array} from "../db/db"


function getItem(code){

  for(let i = 0; i < array.length; i++){
    if(array[i].code === code){
      let x = {
        type:array[i].type,
        price:array[i].price,
        code:array[i].code,
        count:array[i].count
      }
      return x
    }
  }
}

export default getItem