import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import SkillsList from './SkillsList';
import WorkPlaceList from './WorkList';
import PersonInfo from './PersonInfo'
import PersonJson from './InfoJson'

const person = JSON.parse(PersonJson)

const PersonalInformation = () => (
    <div className='Main-resume'> 
        <img src={logo} className="Main-logo" alt="logo"></img>
            <PersonInfo personEl = {person}/>

            <WorkPlaceList worklist = {person.works}/>

            <SkillsList skillsList = {person.skills}/>


    </div>
)


export default PersonalInformation;