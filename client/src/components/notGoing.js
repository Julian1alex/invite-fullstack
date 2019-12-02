import React from "react"
import {useUsers} from "../hooks"
import {Link} from 'react-router-dom'

export function NotGoing(props){
const {notGoing} = useUsers()
    return (
        <div>
            <div><Link to={'/'}>Home</Link></div>
        <div className="goingContainer">
            {notGoing.map((user) =>{
            return(
                <div className="mainContainer">
                <div className="uContainer">
                <div className="iContainer" >
                  <div className="pp">
                  <img src= {user.picture}/>
                  </div>
                  <div className="text">
                  <p>Name: {user.fname} {user.lname}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Email: {user.email}</p>
                  </div>
                </div>
                </div>
                </div>
         ) })}
        </div>
        </div>
    )
}