import { Alert, Avatar, Box, Button, Grid, Paper, TextField, Typography, Stack } from '@mui/material'
import { red } from '@mui/material/colors';
import { color } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Logged_in from './Logged_in';
import { WindowSharp } from '@mui/icons-material';
import { useHistory ,useLocation } from 'react-router-dom';
export default function Login() {
  let s = 0;

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailer, setEmailer] = useState("");
  const [passer, setPasser] = useState("");
  const [succ, setSucc] = useState("");
  const [open, setOpen] = useState(false);

  const emreg = /[a-zA-Z0-9.%-_]{3,20}@[a-zA-Z]{2,10}[.]{1}[a-z]{2,5}/;
  const passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  const emailc = (e) => {
    setEmail(e.target.value);
  }
  const passc = (e) => {
    setPass(e.target.value);
  }
  const valid = () => {
    s = 0;
    if (s == 1) { setSucc(""); }
    if (email === "") {
      setEmailer('*Email Id is required'); s = 1; return false;
    }
    else if (emreg.test(email) === false) {
      setEmailer('*Wrong type of Email Id'); s = 1; return false;

    }
    else {
      setEmailer(""); s = 0;
    }
    if (pass == "") {
      setPasser("*Password compulsory"); s = 1; return false;
    }
    // else if (passreg.test(pass) == false) {
    //   setPasser("*Wrong Password"); s = 1;return false;
    // }
    else {
      setPasser(""); s = 0;
    }

    if (s === 0) {
      setPass("");
      setEmail("");
      setOpen(true);
    }

    if (s == 0) {
      logdata();
    }
  }
  const logdata = () => {

    console.log(email, pass);
    var FormData = require('form-data');
    var data = new FormData();
    data.append('email', email);
    data.append('password', pass);

    var config = {
      method: 'post',
      url: 'https://therecipepool.pythonanywhere.com/account/login/',
      data: data
    };

    axios(config)
      .then(function (response) {
        const k = response.data;
        const v = JSON.stringify(response.data);
        console.log(k);
        localStorage.setItem('rt', k.refresh);
        localStorage.setItem('at', k.access);
        // console.log(localStorage.getItem('at'),typeof(localStorage.getItem('at')));
        // console.log(localStorage.getItem('rt'),typeof(localStorage.getItem('rt')));
        ref();
        s = 0;
      })
      .catch(function (error) {
        console.log(error); s = 0;
        setOpen(false);
      });
  }
  const ref = () => {
    var FormData = require('form-data');
    var data = new FormData();
    data.append('refresh', localStorage.getItem('rt'));
    var config = {
      method: 'post',
      url: 'https://therecipepool.pythonanywhere.com/account/token-refresh/',
      headers: {
        'Authorization': localStorage.getItem('at')
        // ...data.getHeaders()
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        const k = response.data;
        console.log(JSON.stringify(response.data));
        setSucc("Succesful LogIn!!!!!!");
        localStorage.setItem('rt1', k.refresh);
        localStorage.setItem('at1', k.access);
        //window.location.href =window.location.origin+"/Logged_in";
        // const location = useLocation()
        // location.pathname
          //<Link to='Logged_in'></Link>
        // const history = useHistory()
        // history.location.pathname
        // let url=window.location.href.split('/');
        // console.log(url[3]);
        // console.log(typeof(window.location.origin));
      })
      .catch(function (error) {
        console.log(error);
      });

  }



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const paperst = { padding: 10, height: '55vh', width: 360, margin: '20px', backgroundColor: "#7600a9", borderRadius: '24px' };
  const avatarstyle = { backgroundColor: 'black', width: 27, height: 27 };
  const sgn = { color: 'black' };
  const error = { color: 'red' };
  return (<>
    <Grid container sx={{ backgroundColor: 'white' }}>
      <Grid item md={4}></Grid>
      <Grid item md={4}>
        <Paper elevation={20} style={paperst}>
          <Box sx={{ backgroundColor: '#fff', alignContent: 'center', borderRadius: 8 }}>

            <Grid align='center' my={3} mt={3}>
              <Avatar style={avatarstyle}><WifiTetheringIcon></WifiTetheringIcon></Avatar>
              <Box sx={{}}>
                <Typography variant='h4' style={sgn}>Sign up</Typography>
              </Box>
            </Grid>
            {/* <Typography variant='caption' sx={{text}}>Pls Enter the details given below</Typography> */}
            <Grid container ml={2} mr={2}>
              <br /><br />
              <Grid item md={12}>
                <TextField required variant='outlined' label='EmailId' style={{ width: 300 }} value={email} onChange={emailc}></TextField>
                <p style={error}>{emailer}</p>
                <br />
              </Grid>
              <Grid item md={12}>
                <TextField required type='password' variant='outlined' label='Password' style={{ width: 200 }} value={pass} onChange={passc}></TextField>
                <p style={error}>{passer}</p>
                <br />
              </Grid>
              <Grid item md={4}></Grid>
              <Grid item md={4}>
                <Button variant='contained' color='primary' size="small" sx={{ width: '120px' }} onClick={valid}>
                  LogIn
                </Button><br />
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                  </Alert>
                </Snackbar>
              </Grid>
              <Grid item md={4}></Grid>
              <Grid item md={12}>
                <Typography variant='caption'>New Here?<Link to='/Signin'>Register now</Link></Typography><br /><br />
              </Grid>
              <Grid item>
                <Typography variant='subtitle1'>{succ}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      <Grid item md={4}></Grid>
    </Grid>

  </>
  )
}
