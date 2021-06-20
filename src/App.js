import './App.css';
import Homepage from './components/homepage/home';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

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
      </Switch>
     </Router>
     <Footer/>
    </div>
  );
}

export default App;
