import './App.scss';
import {Home} from './pages/Home'
import {Movies} from './pages/Movies'
import {Series} from "./pages/Series"
import {Animes} from "./pages/Animes"
import {WatchList} from "./pages/WatchList"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/movies"> <Movies /> </Route> 
        <Route path="/series"> <Series /> </Route> 
        <Route path="/animes"> <Animes /> </Route> 
        <Route path="/watchlist"> <WatchList /> </Route> 
        </Switch>
        
            
      </div>
      
    </Router>
    
  );
}

export default App;
