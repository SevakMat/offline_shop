import {useHistory } from "react-router-dom";
import {useRef} from "react"

function Login(){
  const history = useHistory();
  const emailInput = useRef(null)
  const passInput = useRef(null)

  function submit(){
    console.log(passInput.current.value);
    console.log(emailInput.current.value);
    history.push(`/workarea`);
  }
  return(
    <div className="App">
    <input ref={emailInput} type = "email"/>
    <input ref={passInput} type = "password"/>
    <button onClick ={submit}  type = "submit"> Submit</button>
 </div>
  
  )


}
export default Login