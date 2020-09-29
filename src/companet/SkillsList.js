import React from 'react';
import '../App.css';



const Skill = ({skill}) => {
return <div>{skill}</div>
}

const SkillsList = ({skillsList}) => {
    return (

    <div className='Main-resume-intro'>
            <h2>Навыки</h2>
        {skillsList.map(el => <Skill skill={el}/>)}
        
    </div>
    
    )
}


export default SkillsList;