import Login from "./login"
import {Route} from "react-router-dom"
import WorkArea from './workArea';


function App() {
  return (
    <div>

      <Route path="/login">
        <Login/>
      </Route>

      <Route  path="/workarea">
        <WorkArea/>
      </Route>
      
    </div>
  );
}

export default App;
