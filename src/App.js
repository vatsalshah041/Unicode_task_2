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
function App() {
  
  return (<>
  {/* <Navbar/> */}
  <Navi/>
    <Routes>
      {/* <Route path='/' element={<Navi/>} /> */}
      <Route path='/LogIn' element={<Login/>} />
      <Route path='/Signin' element={<Signin/>} />
      <Route path='/Sign' element={<Sign/>} />
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
