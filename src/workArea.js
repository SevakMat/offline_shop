import Items from "./items"

import "./style.css"
import {useState,useRef} from "react"


function WorkArea(){

  const [sumPrice, setSumPrice] = useState(0)
  const ShtrixCod = useRef(null);
  const countInput = useRef(null);
  const [itemList, setApranq]=useState([
    {
      type:"milk",
      price:"500",
    },
    {
      type:"meat",
      price:"3000",
    },
    {
      type:"bred",
      price:"300",
    }
  ])
  

  function confirm(){
    console.log(ShtrixCod.current.value);
    console.log(countInput.current.value);
    setApranq([])

  }

  return(
    <div>
      <input ref={ShtrixCod} placeholder="123472473577563"/>
      <input ref={countInput} placeholder="1" />
      <button onClick={confirm} >confirm</button>
      <span className="price" >{sumPrice}</span>
      <Items test={itemList}/>
    </div>
  );
}

export default WorkArea