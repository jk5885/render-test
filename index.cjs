const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')

app.use(cors())


let persons = [
    
        
          {
            "name": "Mary Poppendieck",
            "number": "39-23-6423122",
            "id": 4
          },
          {
            "name": "jaakko",
            "number": "6556",
            "id": 5
          },
          {
            "name": "allu",
            "number": "123321",
            "id": 8
          }
        
      



]

app.get('/info/', (req,res)=>{

  





var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
console.log(dateTime)
const maara = persons.length


res.send(`<p>Luettelossa on ${maara} </p>\n${dateTime} ${today}`)



})

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })



  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)
  
    response.status(204).end()
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

 

  app.post('/api/persons', (request, response) => {

    const generateId = () =>{
      var arvo = Math.floor(Math.random()*5000)
      var arvo1=arvo+200
      console.log("Arvo: ",arvo1)
      return arvo1
    }


    const person = request.body
    var tieto=generateId()
    console.log("tieto: ",tieto)
    person.id=tieto
    console.log(person.id)
    persons = persons.concat(person)
    console.log(person)
    response.json(persons)
  })

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
