
import './App.css';
import React, {useEffect, useState} from 'react';
import Tabla from './components/Tabla/Tabla';


function App() {
const [moneda, setMoneda]= useState([])
  const [search, setSearch]= useState("")

  const URI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true';
console.log(search)
  const getMoneda = (URI)=>{
    fetch(URI)
    .then((response)=>response.json())
    .then( (data)=>{
setMoneda(data)  
  
     
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  useEffect(() => {
    getMoneda(URI);
  }, []);

 
  return(
    <div className='container'>
        <div className='row'>
        <input className="form-control mt-4 text-center"  type="text" placeholder="Search.." onChange={e => setSearch(e.target.value)}/>
        <Tabla  moneda={moneda} filtro={search} />
        </div>
    </div>
  )


}

export default App;
