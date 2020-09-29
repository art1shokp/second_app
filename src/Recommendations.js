import React from 'react';
import './App.css';



const textAdoutMe = (
    <div className='Test-css-intro'>
        Experienced Software Engineer with a demonstrated history of working in the banking industry. Skilled in Search Engine Optimization (SEO), Big Data Analytics, Front-end Development, Agile Methodologies, and jQuery. Strong engineering professional with a Master\'s degree focused in Mathematics and computer software, complexes and computer networks from Belarusian State University of Informatics and Radioelectronics. 
    </div> 
)


const recommendations = [
    {
        name: 'Dima Korolev',
        recommendation: 'Vlad was the first official systems design mentor at Outtalent fellowship. He taught a course from June to August 2015. Our fellows are engineers from top companies in Eastern Europe like Yandex and they rated Vlad very highly. Many of them seem to believe Vladilen\'s course turned out to much better than the best available course on the internet they know. He also built a good rapport with the fellows. One of the fellows even volunteered to send Dima pizza after every job offer he gets.'
    },
    {
        name: 'Akbar Khan',
        recommendation: 'It was a pleasure to work with Vlad and his team in Ufone while I worked as New Business Development Manager for Central Asia and Pakistan at Google. Together with Ufone we launched innovative services and initiatives. Vlad\'s leadership helped launched those initiatives extremely fast and we were very happy with results.'
    },
    {
        name: 'Stefania DRUGA',
        recommendation: 'Dlad\'s exceptional creativity, innovation, leadership and curiosity were noticeable already during his first days in Google. He is great at challenging status quo. He quickly started suggesting new ideas around workflow and training improvement including a more structured training for new starters. He also immediately started contributing to Google culture, for example, He organized a TEDx-type of event which I believe was very interesting and useful to Google employees. I believe Vlad could be a fantastic addition to any organization and his passion to change the world is very inspiring!'
    }
]

const Recommendations = () => {
    return(
        <div className='Test-css'>
                    <div className='Test-css-title'>Обо мне </div>
                        {textAdoutMe}
                    <div className='Test-css-title-h2'>Рекомендации</div>
                    <div className='Test-css-intro'>
                    {recommendations.map(el => <div className='Test-css-title-h3' ><b>{el.name}</b> <div> {el.recommendation}</div> </div> )}
                    </div> 
        </div>
    )

}




export default Recommendations;