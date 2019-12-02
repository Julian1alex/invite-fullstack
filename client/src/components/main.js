import React from "react"
import {useUsers} from "../hooks"
import Icon from "../lib/Icon"
import {Link} from 'react-router-dom'


export default function Main(){
  const { user, goingUser, notGoingUser, going, notGoing } = useUsers()
  
  function handleGoing(user){
    goingUser(user)
  }
  function handleNotGoing(user){
    notGoingUser(user)
  }

  return (
    <div className="mainContainer">
    <div className="uContainer">
      <div className="linkheader">
        <div className="notgoingl">
          <Link to={'/notGoing'}>{notGoing.length} Not Going</Link>
        </div>
        <div className="goingl">
          <Link to={'/going'}>{going.length} Going</Link>
        </div>
      </div>
    <div className="iContainer" >
      <div className="pp">
      <img src= {user.picture}/>
      </div>
      <div className="text">
      <p>Name: {user.fname} {user.lname}</p>
      <p>Phone: {user.phone}</p>
      <p>Email: {user.email}</p>
      </div>
      <div className="buttonf">
      <button onClick={(e)=> handleNotGoing(user)} className="timesb"> <Icon icon="times"/></button>
      <button onClick={(e)=> handleGoing(user)} className="checkb"> <Icon icon="check"/></button>
      </div>
    </div>
    </div>
    </div>
  )
}

