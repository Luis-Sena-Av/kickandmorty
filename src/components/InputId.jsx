import React, { useRef } from 'react'
import { useGetapi } from '../hooks/useGetapi'
import { useState,useEffect } from 'react'

export const InputId = ({setlocationId}) => {

    const inpid=useRef()

    const handlesutmit=(e)=>{
    e.preventDefault()
      let id=0
      if(inpid.current.value.trim()!==""){

        if(locationsName.includes(inpid.current.value)){
          id=locationsName.indexOf(inpid.current.value)+1
        }else{
          id=inpid.current.value
        }
        setlocationId(id)
      }
    }
      const [url, seturl] = useState("https://rickandmortyapi.com/api/location?page=1")
      const [location1,getApi]=useGetapi(url)
      const [locationsName,setlocationsName]=useState([])
      

      useEffect(()=>{
        if(location1?.info.next){
          seturl(location1?.info.next)
        }
      },[location1])

      useEffect(() => {
        getApi()
      }, [url])

      useEffect(()=>{
        if(location1){
          for (const item of location1?.results) {
            locationsName.push(item.name)
          }
        }
      },[location1])


  return (
    <>
      <form className='form' onSubmit={handlesutmit}>
        <input className='intro' type="text" list='nombrelocaciones' ref={inpid}/>
        <input className='enviar' type="submit" />
        <datalist id='nombrelocaciones'>
          {
            locationsName.map((name,item)=>
              <option value={name} key={item}></option>
              )
          }
        </datalist>
      </form>

    </>
  )

}
