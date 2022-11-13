import axios from 'axios'
import React, { useEffect,useState } from 'react'

export default function Axios() {
    const [data, setData] = useState("")
    useEffect(()=>{
        axios.get("")
        .then((res)=>setData(res.data));

    },[]);
    
  return (<>

  </>
  )
}
