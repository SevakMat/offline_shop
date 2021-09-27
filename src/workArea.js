import Items from "./items"

import "./style.css"
import {useState,useRef} from "react"

import getItem from "./service/servise"

function WorkArea(){

  const [sumPrice, setSumPrice] = useState(0)
  const ShtrixCod = useRef(null);
  const countInput = useRef(null);
  
  const [itemList, setItemList]=useState([])
  const [worning, setWorning]=useState('')

  function setItemInItemList(tempItem){
    if(tempItem===undefined){
      setWorning("worning")
    }
    else{
      setWorning("")
      if(countInput.current.value===''){
        let newSumPrice = sumPrice + tempItem.price
        setSumPrice(newSumPrice)
        tempItem["count"]=1
      }
      else{
        let newSumPrice = sumPrice + tempItem.price*countInput.current.value
        setSumPrice(newSumPrice)
        tempItem["count"]=countInput.current.value
      }


      setItemList(itemList => [...itemList, tempItem]);
    }
  }
  
  function confirm(){
    let tempItem = getItem(ShtrixCod.current.value)
    setItemInItemList(tempItem)
  }

  return(
    <div>
      <input ref={ShtrixCod} placeholder="shtrix code"/>
      <input ref={countInput} placeholder="count" />
      <button onClick={confirm} >confirm</button>
      <span className="price" >{sumPrice}</span>
      <Items test={itemList}/>
      <div>{worning}</div>
    </div>
  );
}

export default WorkArea