import React from 'react'
import TvShowOut from '../Components/TvShowOut'

function OutputMap(props) {

const {mapping} = props            

  return (
    <div className='SearchOutput'>
                 { mapping.map((show)=>{
                    

                    return <TvShowOut  key={show.name} id={show.id} title={show.name} image={show.poster_path} />
                    
                   
                    })
                }
    </div>
  )
}

export default OutputMap