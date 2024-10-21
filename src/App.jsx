
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Country from './componants/country'
import './componants/styles/country.css'
function App() {

  const [countries, setCountries] = useState([])
  const [markCountries, setMark] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=> setCountries(data))

  })
  const handleMarkCounries= country =>{
    console.log('add to this country')

    console.log(countries)
  }


  return (
    <>
      
      <h1>load data all countries{countries.length}</h1>
      <div>visited countries</div>
      <div className='country-container'>

      {countries.map((country)=><Country handleMarkCounries={handleMarkCounries} key={countries.ccn3} country={country}></Country>)
      }
      </div>
      
    </>
  )
}

export default App
