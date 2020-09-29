import React from 'react';


const person = {
    name: 'Владилен', 
    lastName: 'Минин',
    birthday: {
        day: 25,
        month: 10,
        year: 1992
    },
    works: [
        {
            company: 'Facesoft',
            firstDay: '21.10.2012',
            lastDay: '23.03.2014'
        },
        {
            company: 'Good',
            firstDay: '01.04.2014',
            lastDay: '30.01.2016'
        },
        {
            company: 'Microbook',
            firstDay: '12.02.2016',
            lastDay: '--:--:--'
        }
    ],
    skills: [
        'JavaScript',
        'Git',
        'HTML/CSS',
        'React',
        'NodeJS'
    ]
}

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

export const RecommendationsJson = JSON.stringify(recommendations)

const PersonJson = JSON.stringify(person);



console.log(RecommendationsJson)

export default PersonJson;