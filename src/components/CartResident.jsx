import React from 'react'
import {useGetapi} from '../hooks/useGetapi'
import {useEffect } from 'react'

export const CartResident = ({Urlresident}) => {
   

 const [resident,getApi]=useGetapi(Urlresident)

  useEffect(() => {
    getApi()
  }, [])

  return (
    <>
        <div className='resident'>
            <div className='residen_foto'>
                <img src={resident?.image} alt={resident?.name} />    
                <span><div className={`${resident?.status}`}></div>  {resident?.status}</span>
            </div>  
            <h2>{resident?.name}</h2>
            <hr/>
            <ul>
                <li><span>Raza</span><br/> <b>{resident?.species}</b></li>
                <li><span>Origen</span><br /> <b>{resident?.origin.name}</b></li>
                <li><span>Aparicion en episodios</span><br /> <b>{resident?.episode.length}</b></li>
            </ul>
        </div>
    
    </>
  )
}
