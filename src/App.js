import './App.css';
import Homepage from './Readerpanel/components/homepage/home';
import Navbar from './Readerpanel/components/navbar/navbar'
import Postpage from './Readerpanel/components/postfull/fullpost'


import {BrowserRouter as Router,
  Switch,
  Route,
  Redirect,} from "react-router-dom";


function App() {
  return (
    <div>
     <Navbar/>
     <Router>
       <Switch>
         <Route path="/" exact>
           <Homepage/>
         </Route>
         <Route path="/posts" exact>
           <Postpage/>
         </Route>
      </Switch>
     </Router>
     
    </div>
  );
}

export default App;
