import React from 'react'
import { CartResident } from './CartResident'

export const CartLocation = ({location}) => {



  return (
    <>
        <div className='info_location'>
            <h2>{location?.name}</h2>
            <ul>
                <li> <h4>Type :</h4> <span>{location?.type}</span> </li>
                <li> <h4>Dimension :</h4> <span>{location?.dimension}</span> </li>
                <li> <h4>Population :</h4> <span>{location?.residents.length}</span> </li>
            </ul>
        </div>
      <div className='residents'>
      {location?.residents.map(Urlresident=>
        <CartResident Urlresident={Urlresident} key={Urlresident}/>
      )}
      </div>
      
    </>
  )
}
