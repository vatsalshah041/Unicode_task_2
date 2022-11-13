import React from 'react';
import { Stack } from '@mui/material';
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom'
import { createSvgIcon } from '@mui/material/utils';
const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);

export default function Navi() {
  return (
    <div>
      <nav>
        {/* <Link to=''><HomeIcon color='primary' sx={{width:'50px',height:'50px'}}></HomeIcon></Link> */}
        <ul>
          <li>
            <Link to='/LogIn'>LogIn</Link>
          </li>
          <li>
            <Link to='/Signin'> SignIn</Link>
          </li>
          <li>
            <Link to='/Sign'> Sign</Link>
          </li>
        </ul>
      </nav>
      {/* <Stack direction="row" spacing={2}>
                    <Item>Data Structures</Item>
                    <Item>Algorithms</Item>
                    <Item>Web Development</Item>
                </Stack> */}
    </div>
  )
}
