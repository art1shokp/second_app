import React from 'react';
import '../App.css';
import Recommendations from '../Recommendations';
import PersonalInformation from './PersonalInformation'

const Test = () => {
    
    return(
        <div className='Main'>
             <h1> Resume</h1>
            <PersonalInformation/>
            <Recommendations/>
        </div>
    )
}



export default Test;