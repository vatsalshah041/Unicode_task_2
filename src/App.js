import { Grid } from '@mui/material';
import './App.css';
import Login from './components/Login';
import Navi from './components/Navi';
import Navbar from './components/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Signin from './components/Signin';
import Sign1 from './components/Sign1';
import Sign from './components/Sign';
import Logged_in from './components/Logged_in';
//import Menu from './components/Menu';
function App() {
  
  return (<>
  <Navbar/>

    <Routes>
      {/* <Route path='/' element={<Navi/>} /> */}
      <Route path='/LogIn' element={<Login/>} />
      <Route path='/Signin' element={<Signin/>} />
      <Route path='/Sign' element={<Sign/>} />
      <Route path='/Logged_in' element={<Logged_in></Logged_in>}></Route>
      {/* <Route path="/Menu" element={<Menu></Menu>}></Route> */}
    </Routes>
   
    {/* <Router>
    <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/">
            <Signin/>
          </Route>
        </Switch>
        </Router> */}
  </>
  );
}

export default App;
