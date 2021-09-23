import  {useState} from 'react';
import WorkArea from './workArea';

function Login(){

  const [isLog, setisLog] = useState(false);

  function submit(){
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("pass").value);
    setisLog(!isLog);
  }
  return(
    <div className="App">
    <input id = "email" type = "email"/>
    <input id = "pass" type = "password"/>
    <button onClick ={submit}  type = "submit"> Submit</button>
    {isLog && <WorkArea/>}

 </div>
  
  )


}
export default Login