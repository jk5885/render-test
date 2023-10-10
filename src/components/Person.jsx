


const Person = (props) => {
  console.log("Person komponentti", props);
  console.log(props.suod.length)
  console.log(props.x.name)

  //sekoilua
  //const test = props.x.name.filter(person => person.toLowerCase().includes(props.suod.toLowerCase()))
  //console.log("test",test.name)
  //const suodatettuLista = props.suod.length > 0
    //? props.x.filter(person => person.name.toLowerCase().includes(props.suod.toLowerCase()))
   //: props.x;
  //console.log("Persons: ",suodatettuLista)
//const test = props.x.name
  //function filterItems(arr, query) {
    //return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
 // }

  //console.log(filterItems(test, props.suod))

  console.log("EHTO",props.x.name.toLowerCase().includes(props.suod.toLowerCase()))
  console.log("ennenIF: ",props.x.number)

 /*
  const poistaNimi = (event) => {
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
    */

   


  if (props.x.name.toLowerCase().includes(props.suod.toLowerCase())){
    var nimi=props.x.name
    var numero=props.x.number
    console.log("NRO:" ,numero)
    return (
      <li>
        {nimi} {numero} <button onClick={props.poistaNimi}> poista</button>
   
      </li>
        
    )


  }
  else{
    return('')

  }




  
}

export default Person





