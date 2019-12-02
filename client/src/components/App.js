import React from "react"
import Main from "./main"
import {Going} from './going'
import {NotGoing} from './notGoing'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="appContainer">
    <Route exact path='/' component={Main}/>
    <Route path='/notGoing' component={NotGoing}/>
    <Route path='/going' component={Going}/>
   </div>
  </Router>
  )
  }

export default App
