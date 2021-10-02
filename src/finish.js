import "./style.css"

import {useRef,useState,useEffect} from "react"

function Finish({price,goBack}){

  const inputPrice = useRef()
  const [result,setResult] = useState('')

  function confirm(){
    let zdachi =parseInt(inputPrice.current.value )-price
      setResult(zdachi)
  }
  useEffect(() => {
    inputPrice.current.focus();
  }, []);
  
  return(
    <div className="finishArea">
      <div>dzer arevtri arjeqy - {price}</div>
      <input ref = {inputPrice} placeholder="input price"/>
      <button onClick={confirm}>hastatel ardyunqy</button>
      <div>{result}</div>
      <button onClick = {goBack}>go back</button>
    </div>
  )
}

export default Finish