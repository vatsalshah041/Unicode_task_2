
import axios from 'axios';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, Grid, useEffect, Box, Button } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Logged_in() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const [type, setType] = useState("breakfast");
  const [d, setD] = useState();
  const [like, setLike] = useState(false)
  const [mydata, setMydata] = useState([])
  useEffect(() => {
  
    menu();

  }, [])
  const dinner = () => {
    setType('dinner');
    menu();
  }
  const lunch = () => {
    setType('lunch');
    menu();
  }
  const breakfast = () => {
    setType('breakfast');
    menu();
  }
const menu = async() => {
var data = JSON.stringify({
  "meal": [
    type
  ]
});

var config = {
  method: 'post',
  url: 'https://therecipepool.pythonanywhere.com/api/filter-meal/',
  headers: { 
    'Authorization': localStorage.getItem("at1"), 
    'Content-Type': 'application/json'
  },
  data : data
};

await axios(config)
.then(function (response) {
  console.log((response.data));
  //console.log(e.target.value);
  setD(response.data);
  //console.log("hi",d);
})
.catch(function (error) {
  console.log(error);
});

  };

  // const menu = async () => {
  //   try {
  //     await axios
  //       .post(
  //         "https://therecipepool.pythonanywhere.com/api/filter-meal/",
  //         { meal: type },
  //         {
  //           headers: {
  //             Authorization: "Bearer " + localStorage.getItem("at1"),
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         console.log(response.data);
  //         setD(response.data);
  //         //console.log(d);
  //       })
  //       .catch((err) => console.log( err));
  //   } catch (err) {
  //     console.log( err);
  //   }
  // };


  return (
    <>
      <div>
        <button onClick={menu} value='lunch'>Lunch</button>
        <button onClick={menu} value='breakfast'>Breakfast</button>
        <button onClick={menu} value='dinner'>Dinner</button>
      </div>
      <br></br>
      <div className='container'>

      {d?<>yes</>:<>no</>}
        
      {/* {d[0].label} */}

      </div>
    </>
  )
}
