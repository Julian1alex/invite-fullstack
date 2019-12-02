const router = require("express").Router()
const going = []
const NotGoing = []

router.post('/going', (req,res,next)=>{
  const id = going.length +1
  const user = req.body.user
  user.id = id

  going.push(user)
  res.json(user)
})

router.post('/notGoing', (req,res,next)=>{
  const id = NotGoing.length +1
  const user = req.body.user
  user.id = id

  NotGoing.push(user)
  res.json(user)
})

router.get("/going", (req, res, next) => {
  res.json(going)
})

router.get("/notGoing", (req, res, next) => {
  res.json(NotGoing)
})

module.exports = router