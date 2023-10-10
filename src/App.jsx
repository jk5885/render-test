import { useState, useEffect } from 'react'
import Person from './components/Person'
//import axios from 'axios'
import henkiloPalvelu from './services/henkilot'



const Filter = (props) =>{
  console.log("Filtteri: ",props)

  return(
  <div> 
        suodata: <input value={props.v1}
                        onChange={props.v2}/>
      </div>

    
  )
}

const LisaaTiedot = ( props ) =>{
console.log("Lisää: ",props)
  
  return (
    <form onSubmit={props.l1}>
        
    <div>
      name: <input value={props.l2} 
                    onChange={props.l3}/>
    </div>
   
    <div>numero: <input value={props.l4}
                        onChange={props.l5}/>
    </div>
  
    <div>
      <button type="submit">add</button>
    </div>
  
  </form>
  )
  
  }

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumero, setNewNumero] = useState('')
  const [uusiSuodatin, setUusiSuodatin]=useState('')


  
  const tiedot = () => {
    console.log("useEffect: ",useEffect)

    henkiloPalvelu
      .getAll()
      .then(vastaus => {
        console.log("axios vast", vastaus)
        setPersons(vastaus)
      })
    }
    useEffect(tiedot,[])

  


  const lisaaNimi = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const nimiObject = {
      name: newName,
      number: newNumero

    }
    
    // tämän  if ehdon teki tekoäly
    if (!persons.some(person => person.name === newName)) {

      henkiloPalvelu
      .lisaa(nimiObject)
           
      .then(vastaus=>{
        setPersons([...persons, vastaus ])
      })
     
    } else {
      console.log("Henkilö on jo listassa.");
      alert(`${newName} is already added to phonebook`)
    }

   // const nimiObject = persons.includes(nimiObject) 
   // ?({
   //   name: newName
   //   
   // }
    //setPersons(persons.concat(nimiObject))
   // )
   // : (console.log("eiei"))
    console.log("nimen lisäys: ",persons.includes(nimiObject))

    

    //const tulos = ehto ? val1 : val2copy

    
    
    
    
    setNewName('')
    setNewNumero('')
  }

  const handleNimiChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumeroChange =(event) =>{
    console.log(event.target.value)
    setNewNumero(event.target.value)

  }
  const handleSuodatinChange=(event)=>{
    console.log(event.target.value)
    setUusiSuodatin(event.target.value)
  }

  const poistaNimiof = (x) =>{
    console.log("poistanimiof: ",x.name)
    const poisto = persons.find(pois => pois.id===x.id)

    
    
    if (window.confirm(`Haluatko poistaa henkilön ${x.name}?`)) {
      window.open(
      henkiloPalvelu
      .poista(poisto)
      .then(vastaus=>{
        console.log(`poistettiin ${poisto.name}`)
      }))
    } else {
      
    }

    
  } 




  
 
 



  return(
    <div>

      <h2>Phonebook</h2>
      
      <Filter v1={uusiSuodatin} v2={handleSuodatinChange}/>




     <h2>lisää nimi</h2>

     <LisaaTiedot l1={lisaaNimi} l2={newName} l3={handleNimiChange} l4= {newNumero}
    l5= {handleNumeroChange}/>


      

      <h2>Numbers</h2>
      <ul>
        {persons.map(x => 
          <Person key={x.name}
           x={x} 
           suod={uusiSuodatin}
           poistaNimi={()=> poistaNimiof(x)} />
        )}
      </ul>
      <div>debug: {newName}</div>
      ...
    </div>
  )

}

export default App