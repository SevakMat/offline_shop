import Login from "./login"
import {Route,Switch,Redirect} from "react-router-dom"
import WorkArea from './workArea';


function App() {


  const isLogin = localStorage.getItem("logined");
  function Routers(){

    return(
      <Switch> 
        <Route exact path="/login">
          {!isLogin ? <Login/>:<Redirect to="/workarea"/> }
        </Route>

        <Route exact path="/workarea">
          {isLogin ? <WorkArea/>: <Redirect to="/login"/>}
        </Route>
      </Switch>
   
    )
  }
  return <Routers/>
}

export default App;
