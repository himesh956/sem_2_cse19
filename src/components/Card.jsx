import React from 'react'

const Card = (props) => {
  return (
    <div style={{border:"5px solid black", width:"300px", height:"300px", backgroundColor:"rgb(231, 229, 224)", padding:"20px", gap:"10px", margin:"10px"}}>
        <h3>Student Record</h3>
      <h3>Student Name: {props.name}</h3>
        <h4>Class: {props.class}</h4>
    <img src={props.img} style={{width: "50%",height: "auto"}} />
    </div>
  )
}

export default Card
