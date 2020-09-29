import React from 'react';
import '../App.css';

function CompanyName({company, children}){
    return <div className='CompanyName'><b><i>{company}</i></b> {children}</div>
    }

const WorkPlace = ({workPlace}) => {
    return  (
        <div>
        ___________________________________________

        <CompanyName  company = {workPlace.company}> 
        <br/>
        Начиная с <i>{workPlace.firstDay} по {workPlace.lastDay}</i>
        </CompanyName>
        ____________________________________________
        </div> 
    )
}


const WorkPlaceList = ({worklist}) => {
    return (

        <div className='Main-resume-intro'>

        <h2>Опыт работы</h2>

        {worklist.map( el => < WorkPlace workPlace= {el} />)}


        </div>
    )
}

export default WorkPlaceList;