// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Recommendations from './Recommendations';

// const person = {
//     name: 'Владилен', 
//     lastName: 'Минин',
//     birthday: {
//         day: 25,
//         month: 10,
//         year: 1992
//     },
//     works: [
//         {
//             company: 'Facesoft',
//             firstDay: '21.10.2012',
//             lastDay: '23.03.2014'
//         },
//         {
//             company: 'Good',
//             firstDay: '01.04.2014',
//             lastDay: '30.01.2016'
//         },
//         {
//             company: 'Microbook',
//             firstDay: '12.02.2016',
//             lastDay: '--:--:--'
//         }
//     ],
//     skills: [
//         'JavaScript',
//         'Git',
//         'HTML/CSS',
//         'React',
//         'NodeJS'
//     ]
// }


// function CompanyName({company}){
//     return <div className='CompanyName'><b><i>{company}</i></b></div>
// }

// // const person = { person.works.map( el =>  <div>_________________________________________<div><CompanyName company={el.company} />  Начиная с <i>{el.firstDay} по {el.lastDay}</i></div> _________________________________________ <div/> </div> )}

// const date = new Date();
// const year = date.getFullYear();


// const PersonalInformation = (
// <div className='Main-resume'> 
//         <img src={logo} className="Main-logo" alt="logo"></img>
//                 <div className='Main-resume-intro'>

//                     <div> Имя: {person.name}  </div>
//                     <div> Фамилия: {person.lastName} </div>    
//                     <div> {year - person.birthday.year} лет</div>
//                 </div>
//                 <div className='Main-resume-intro'>
//                     <h2>Опыт работы</h2>
                
//                 </div>
//                 <div className="Main-resume-intro">
//                 </div>
                
//         </div>
// )

// const Test = () => {
    
//     return(
//         <div className='Main'>
//              <h1> Resume</h1>
//             {PersonalInformation}
//             <Recommendations/>
//             {/* <CompanyName company = "еус" /> */}
//         </div>
//     )
// }


// export default Test;