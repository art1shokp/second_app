import React from 'react';
import '../App.css';


const date = new Date();
const year = date.getFullYear();


const PersonInfo = ({personEl}) => {
    return(
    <div className='Main-resume-intro'>
        <div> Имя: {personEl.name}  </div>
        <div> Фамилия: {personEl.lastName} </div>    
        <div> {year - personEl.birthday.year} лет</div>
    </div>)

};

export default PersonInfo;