import React, { useRef } from 'react'

export const InputId = ({setlocationId}) => {

    const inpid=useRef()

    const handlesutmit=(e)=>{
    e.preventDefault()
    if(inpid.current.value.trim()!==""){
        setlocationId(inpid.current.value)
    }
    
    }

  return (
    <>
        <form className='form' onSubmit={handlesutmit}>
            <input className='intro' type="text" ref={inpid}/>
            <input className='enviar' type="submit" />
        </form>
    </>
  )

}
