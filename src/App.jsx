import { useState,useEffect } from 'react'
import './App.css'
import {useGetapi} from './hooks/useGetapi'
import {Randon} from './funciones/Randon'
import { CartLocation } from './components/CartLocation'
import { InputId } from './components/InputId'
function App() {
  const randomId=Randon(126)
  const [locationId,setlocationId]=useState(randomId)
  const url=`https://rickandmortyapi.com/api/location/${locationId}`
  const [location,getApi,haserror]=useGetapi(url)

  useEffect(() => {
    getApi()
  }, [locationId])

  const estilo={
    backgroundImage:'url("./imagenes/rick-y-morty.jpg")' 
  }
  
  return (
    <>
      <div className='rickandmorty'>
        <header style={estilo}>
          <img src="./imagenes/tt.png" alt="rick" />
        </header>
        
        <div className='carta'>
          <InputId setlocationId={setlocationId}/>
          {haserror? <h2 className='mensajerr'> ❌ Hey! you must provide an id from 1 to 126</h2>:location? <CartLocation location={location}/>:<div className='load'></div> }
        </div>
      </div>
      
    </>
  )
}

export default App
