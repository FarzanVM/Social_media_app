
// import './App.css';
import Navbars from './components/Navbar/Navbar'
import Forms from './components/Form/Forms';
import Blog from './components/Blog/Blog'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path="/">
              <Navbars/>
              <Forms/>
              </Route>
              <Route  exact path="/Blog" component={Blog}/>                
          </Switch>    
      </Router>
    </div>
  );
}

export default App;
