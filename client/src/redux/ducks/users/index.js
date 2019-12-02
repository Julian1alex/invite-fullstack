import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_INVITEE = "users/GET_INVITEE"
const GOING_INVITEE = "users/GOING_INVITEE"
const NOT_GOING = "users/NOT_GOING"

// initial state
const initialState = {
  user: {},
  going: [],
  notGoing: [],
 
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INVITEE:
      return { ...state, user: action.payload }
     
      case GOING_INVITEE:
      return { ...state, going: action.payload }
      
      case NOT_GOING:
      return { ...state, notGoing: action.payload }
    default:
      return state
  }
}

// action creators
const getUser = () => {
  return dispatch => {
    axios.get("https://randomuser.me/api/").then(resp => {
    const person = {
      picture: resp.data.results[0].picture.large,
      fname: resp.data.results[0].name.last,
      lname: resp.data.results[0].name.first,
      email: resp.data.results[0].email,
      phone: resp.data.results[0].phone,
    }
    
    
    dispatch({
        type: GET_INVITEE,
        payload: person
      })
      console.log(person)
    })
  }
}


//Post

function goingPerson(user){
  return dispatch =>{
    axios.post('/users/going', {user}).then(resp=>{
      dispatch(getUser())
      dispatch(getGoing())
  })
  }
}
 function notGoingPerson(user){
  return dispatch => {
    axios.post('/users/notGoing', {user}).then(resp=>{
    dispatch(getUser())
    dispatch(getNotGoing())
    })
  }
}

//Get

function getGoing(){
  return dispatch =>{
    axios.get('/users/going').then(resp=>{
      dispatch({
        type: GOING_INVITEE,
        payload:resp.data
      })
    })
  }
}
function getNotGoing(){
 return dispatch =>{
    axios.get('/users/notGoing').then(resp=>{
      dispatch({
        type: NOT_GOING,
        payload: resp.data
      })
    })
  }
}

// custom hooks
export function useUsers() {
  const user = useSelector(appState => appState.userState.user)
  const going = useSelector(appState => appState.userState.going)
  const notGoing = useSelector(appState => appState.userState.notGoing)
  const dispatch = useDispatch()
  const goingUser = (user)=> dispatch(goingPerson(user))
  const notGoingUser = (user)=> dispatch(notGoingPerson(user))

  useEffect(() => {
    dispatch(getUser())
    dispatch(getGoing())
    dispatch(getNotGoing())
  }, [dispatch])

  return { user, going, goingUser, notGoing, notGoingUser}
}