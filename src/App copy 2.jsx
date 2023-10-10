import { useState } from 'react'
import Person from './components/Person'


const Filter = (props) =>{
  console.log("Filtteri: ",props)

  return(
  <div> 
        suodata: <input value={props.v1}
                        onChange={props.v2}/>
      </div>

    
  )
}

const LisaaTiedot = ( {lisaaNimi},{newName}, {handleNimiChange}, {newNumero}, {handleNumeroChange} ) =>{

  
return (
  <form onSubmit={lisaaNimi}>
      
  <div>
    name: <input value={newName} 
                  onChange={handleNimiChange}/>
  </div>
 
  <div>numero: <input value={newNumero}
                      onChange={handleNumeroChange}/>
  </div>

  <div>
    <button type="submit">add</button>
  </div>

</form>
)

}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumero, setNewNumero] = useState('')
  const [uusiSuodatin, setUusiSuodatin]=useState('')

  const lisaaNimi = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const nimiObject = {
      name: newName,
      numero: newNumero

    }
    
    // tämän  if ehdon teki tekoäly
    if (!persons.some(person => person.name === newName)) {
      setPersons([...persons, nimiObject]);
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

  
 



  return (
    <div>

      <h2>Phonebook</h2>
      
      <Filter v1={uusiSuodatin} v2={handleSuodatinChange}/>




     <h2>lisää nimi</h2>

    <LisaaTiedot l1={lisaaNimi} l2={newName} l3={handleNimiChange} l4= {newNumero}
    l5= {handleNumeroChange}/>

      
      <h2>Numbers</h2>
      <ul>
        {persons.map(x => 
          <Person key={x.name} x={x} suod={uusiSuodatin} />
        )}
      </ul>
      <div>debug: {newName}</div>
      ...
    </div>
  )

}

export default App