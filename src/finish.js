import "./style.css"

import {useRef,useState,useEffect} from "react"

function Finish({price,goBack, submit}){

  const inputPrice = useRef()
  const [result,setResult] = useState('')

  function confirm(){
    if(!isNaN(inputPrice.current.value)){
      let zdachi =parseInt(inputPrice.current.value )-price
        setResult(zdachi)
    }else{
      setResult("sxal")
    }
  }
  useEffect(() => {
    inputPrice.current.focus();
  }, []);
  
  return(
    <div style={{width: 400,alignSelf:'center',margin:'0 auto'}} className="finishArea">
      <div>dzer arevtri arjeqy - {price}</div>
      <input ref = {inputPrice} placeholder="input price"/>
      <button onClick={confirm}>hastatel ardyunqy</button>
      <div>{result}</div>
      <button onClick = {goBack}>go back</button>
      <button onClick = {submit}>submit</button>
    </div>
  )
}

export default Finish