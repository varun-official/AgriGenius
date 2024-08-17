import React, { useEffect, useState } from 'react'
import './Listwithheadingstyle.scss'

function Listwithheading({name}) {
  const[heading,setHeading]=useState("");
  const[body,setBody]=useState("");

  useEffect(()=>{
    const [value1, value2] = Object.values(name);
    setHeading(value1);
    setBody(value2)
  },[name])

  console.log("next");
  return (
    <div className='listheadingmain'>
      <div className='listbox'>
      <h3>{heading}</h3>
      <p>{body}</p>
      </div>

    </div>
  )
}

export default Listwithheading