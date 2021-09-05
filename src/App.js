import './App.css';
import Homepage from './Readerpanel/components/homepage/home';
import Navbar from './Readerpanel/components/navbar/navbar'
import Postpage from './Readerpanel/components/postfull/fullpost'
import Footer from './Readerpanel/components/Footer/footer';

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
     <Footer/>
    </div>
  );
}

export default App;
