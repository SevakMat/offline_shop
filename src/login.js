import {useHistory } from "react-router-dom";
import {useRef,useEffect} from "react"

function Login(){

  const history = useHistory();

  const emailInput = useRef(null)
  const passInput = useRef(null)
  

  function submit(){

    localStorage.setItem("logined",1)
    history.push('/workarea');
    window.location.reload()
  }

  useEffect(() => {
    emailInput.current.focus();
  }, []);
  
  return(
    <div className="App">
    <input ref={emailInput}/>
    <input ref={passInput} />
    <button onClick ={submit}  type = "submit"> log in</button>
 </div>
  
  )


}
export default Login