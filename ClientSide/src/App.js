import React, { createContext, useReducer } from 'react';
import "./App.css";
import { Switch , Route } from 'react-router-dom';
import Navhoga from './Components/Navhoga';
import Home from "./Components/Home";
import About from './Components/About';
import Register from './Components/Register';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Errorpa from "./Components/Errorpa";
import { initialState, reducer } from './Reducer/UseRed';

export const UserContext = createContext();

const Routing = () => {
  return(
    <Switch>
    <Route exact path="/"> <Home /> </Route>
    <Route path="/about"> <About /> </Route>
    <Route path="/register"> <Register /> </Route>
    <Route path="/login"> <Login /> </Route>
    <Route path="/logout"> <Logout /> </Route>
    <Route path="*"> <Errorpa /> </Route>
    </Switch>
  )
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <UserContext.Provider value={{state,dispatch}}>
      <Navhoga />
      <br />
      <Routing />
      </UserContext.Provider>
    </div>
  );
};

export default App;