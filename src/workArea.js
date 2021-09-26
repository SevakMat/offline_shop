import Items from "./items"

import "./style.css"
import {useState,useRef} from "react"

import getItem from "./service/servise"

function WorkArea(){

  const [sumPrice, setSumPrice] = useState(0)
  const ShtrixCod = useRef(null);
  const countInput = useRef(null);

  const [itemList, setApranq]=useState([])
  const [worning, setWorning]=useState('')

  

  function confirm(){

    let x = getItem(ShtrixCod.current.value)
    console.log("x",x);
    if(x==undefined){
      setWorning("worning")
    }
    else{
      setWorning("")

      let p = + x.price

    p = p + sumPrice
    
    setSumPrice(p)

    let l = itemList
    l.push(x)

    console.log(l);
  }
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