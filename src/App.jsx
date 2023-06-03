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
  
  console.log(location);

  return (
    <>
      <div className='rickandmorty'>
        <header>
          <img src="./imagenes/tt.png" alt="" />
        </header>
        <div className='carta'>
          <InputId setlocationId={setlocationId}/>
          {haserror? <h2>Hey! you must provide an id from 1 to 126</h2>: <CartLocation location={location}/> }
        </div>
      </div>
      
    </>
  )
}

export default App
