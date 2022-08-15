import React from 'react';
import './nomatch.scss';
import {useNavigate} from "react-router-dom";
import error from './error.jpg'


function NoMatch() {
  const navigate = useNavigate();
  return (

    <div className="p-nomatch-component">
       <img src={error} alt="lionelricheerrorpage" onClick={() => navigate('/', {replace: true})}/>
      

    </div>
  )
}

export default NoMatch
