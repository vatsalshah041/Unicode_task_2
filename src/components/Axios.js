import axios from 'axios'
import React, { useEffect } from 'react'

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
