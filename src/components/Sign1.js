import { Button, Grid, Paper, Typography,TextField,Avatar,RadioGroup,FormControlLabel,FormControl,FormLabel,Radio} from '@mui/material'
import { borderRadius, Box } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';


export default function Signin() {
    let s=0;
    const [emailer,setEmailer]=useState("");
    const [gender,setGender]=useState("female");
    const [passer,setPasser]=useState("");
    const [fner,setFner]=useState("");
    const [lner,setLner]=useState("");
    const [per,setPer]=useState("");//phone
    const [conpasser,setConpasser]=useState("");
    const [dober,setDober]=useState("");
    const [dob,setDob]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [hpass,setHpass]=useState("");
    const [conpass,setConPass]=useState("");
    const [msg,Setmsg]=useState("");
    const [fn,setFn]=useState("");
    const [ln,setLn]=useState("");
    const [num,setNum]=useState("");
    const [succ,setSucc]=useState("");
    const [disp,setDisp]=useState();
    const nreg=/[A-Z]{1}[a-z]{1,}/;
    const emreg=/[a-zA-Z0-9.%-_]{3,20}@[a-zA-Z]{2,10}[.]{1}[a-z]{2,}/;
    const numreg=/[0-9]{10}/;
    const passreg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    const dobreg=/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    const fnamec=(e)=>{
        setFn(e.target.value);
    }
    const genderc=(e)=>{
      setGender(e.target.value);
    }
    const lnamec=(e)=>{
        setLn(e.target.value);
    }
    const emailc=(e)=>{
        setEmail(e.target.value);
    }
    const phonec=(e)=>{
        setNum(e.target.value);
    }
    const passc=(e)=>{
        setPass(e.target.value);
        

    }
    const conpassc=(e)=>{
        setConPass(e.target.value);
    }
    const dobc=(e)=>{
      setDob(e.target.value);
    }
    const valid=()=>{
      if(s==1){setSucc("");}
        if(fn==="")
        {
            setFner('*First Name is required');s=1;
        }
        else if(nreg.test(fn)===false ){
            setFner('*Enter correct Name');s=1;

        }
        else{
            setFner("");s=0;
        }
        if(ln==="")
        {
            setLner('*Last Name is required');s=1;
        }
        else if(nreg.test(ln)===false ){
            setLner('*Enter correct Last Name');s=1;

        }
        else{
            setLner("");s=0;
        }
        if(num==="")
        {
            setPer('*Phone no. required');s=1;
        }
        else if(numreg.test(num)===false ){
            setPer('*Enter valid phone no.');s=1;

        }
        else{
            setPer("");s=0;
        }
        if(dob=='')
        {
          setDober("*DOB required");s=1;
        }
        else if(dobreg.test(dob)===false)
        {
          setDober("Enter correct DOB");s=1;
        }
        else
        {
          setDober("");s=0;
        }
        if(email==="")
        {
            setEmailer('*Email Id is required');s=1;
        }
        else if(emreg.test(email)===false ){
          setEmailer('*Wrong type of Email Id');s=1;

        }
        else{
          setEmailer("");s=0;
        }
        if(pass=="" )
        {
          setPasser("*Password compulsory");s=1;
        }
        else if(passreg.test(pass)==false){
          setPasser("*Wrong Password");s=1;
        }
        else{
          setPasser("");s=0;
        }
        if(conpass=="" )
        {
          setConpasser("*Confirm the password");s=1;
        }
        else if(pass!=conpass){
          setConpasser("*Password not matching");s=1;
        }
        else{
          setConpasser("");s=0;
        }
        if(s==0){setSucc("Succesful LogIn");}
        if(s==0)
        {
          setFn("");
          setPass("");
          setConPass("");
          setDob("");
          setLn("");
          setNum("");
          setEmail("");
        }
        
    }
    const paperst={padding:10 ,height:'122vh' ,width:520,margin:'20px',backgroundColor:"#7600a9",borderRadius:'24px'};
    const avatarstyle={backgroundColor:'black',width:27,height:27};
    const sgn={color:'black'};
    const error={color:'red'};
  return (<>
  <Grid container>
    <Grid item md={4}></Grid>
    <Grid item md={4}>
  <Paper elevation={20} style={paperst}>
    <Box sx={{backgroundColor:'white',alignContent:'center',borderRadius:8}}>
    <Grid align='center' my={3} >
    <Avatar style={avatarstyle}><WifiTetheringIcon></WifiTetheringIcon></Avatar>
        <Box sx={{margin:'5px'}}>
        <Typography variant='h4' style={sgn}>Sign in</Typography></Box>
        </Grid>
        {/* <Typography variant='caption' sx={{text}}>Pls Enter the details given below</Typography> */}
        <form>
        <Grid container ml={2}>
            <Grid item md={5}>
            <TextField required  variant='outlined' label='First name' style={{width:200}}   value={fn} placeholder='First name' onChange={fnamec}></TextField>
               <p style={error}>{fner}</p>
            </Grid>
            <Grid item md={5}>
            <TextField required  variant='outlined' label='Last name' style={{width:200}}  value={ln} onChange={lnamec}></TextField>
               <p style={error}>{lner}</p>
            </Grid>
            <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
            <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={gender}
            onChange={genderc}
            >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            </FormControl>
            <Grid item md={12}>
            <TextField required  variant='outlined' label='DOB' style={{width:200}} value={dob} placeholder="DD/MM/YYYY" onChange={dobc}></TextField>
            <p style={error}>{dober}</p>
            </Grid><br/><br/>
            <Grid item md={12}>
            <TextField required  variant='outlined' label='Phone no.' style={{width:200}} value={num} onChange={phonec}></TextField>
               <p style={error}>{per}</p>
            </Grid>
            
            <br/><br/>
            <Grid item md={12}>
            <TextField required  variant='outlined' label='EmailId' style={{width:300}} value={email} onChange={emailc}></TextField>
               <p style={error}>{emailer}</p>
            </Grid>
            <Grid item md={5}>
            <TextField required  variant='outlined' label='Password' style={{width:200}} value={pass} onChange={passc}></TextField>
               <p style={error}>{passer}</p>
            </Grid>
            <Grid item md={5}>
            <TextField required  variant='outlined' label='Password' style={{width:200}} value={conpass} onChange={conpassc}></TextField>
               <p style={error}>{conpasser}</p>
            </Grid>
            <Grid item md={6} >
                
            {/* <input type='submit' value='submit' onClick={valid}>Submit</input> */}
            <Button variant='contained' color='primary' size="small" sx={{width:469}} onClick={valid}>
              Register
            </Button><br/><br/>
            </Grid>
            <Grid item md={6}></Grid>
            <Grid item><Typography variant='caption'>Already Registered?<Link to='/LogIn'>Login here </Link></Typography></Grid>
        </Grid>
        </form>
        </Box>
  </Paper>
  </Grid>
  <Grid item md={4}></Grid>
  </Grid>
  </>
  )
}
