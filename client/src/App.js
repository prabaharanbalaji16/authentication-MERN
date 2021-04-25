import './App.css';
import {Switch,  BrowserRouter , Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Test from './test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
