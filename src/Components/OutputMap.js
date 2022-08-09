import React from 'react'
import TvShowOut from '../Components/TvShowOut'

function OutputMap(props) {
//    const originalImage = `https://image.tmdb.org/t/p/original/${imgPath}`
//    const  w500Image =  `https://image.tmdb.org/t/p/w500/${imgPath}`
const {mapping} = props            

  return (
    <div>
                 { mapping.map((show)=>{
                    

                    return <TvShowOut  key={show.name} id={show.id} title={show.name} image={show.poster_path} />
                    
                   
                    })
                }
    </div>
  )
}

export default OutputMap