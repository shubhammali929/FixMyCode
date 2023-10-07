import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import IntroPage from "./components/IntroPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App v-flex">
        <NavBar/>
        <Switch>
              <Route exact path="/"> <IntroPage /> </Route>
              <Route path="/intropage"> <IntroPage /> </Route>
              <Route path="/dashboard"> <Dashboard /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

