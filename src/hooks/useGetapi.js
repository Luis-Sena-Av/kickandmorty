import axios from 'axios'
import { useState} from 'react'


export const useGetapi = (url) => {

    const [api, setapi] = useState()
    const [haserror, sethaserror] = useState(false)

    const getApi=()=>{
        axios.get(url)
            .then(res=>{setapi(res.data)
                sethaserror(false)
            })
            .catch(err=>{console.log(err)
                sethaserror(true)
                setTimeout(()=>{
                    sethaserror(false)
                }
                ,3000)
                
            })
    }

  return [api,getApi,haserror]
  
}
