import React from 'react'
import Banner from './Banner'
import './Home.css'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner/>
            <h2 className='card__heading'>Live Anywhere</h2>
            <div className='home__section'>
                <Card
                    src={'https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=240'}
                    title='Outdoor gateways'
                />
                <Card
                    src={'https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=240'}
                    title='Unique stays'
                />
                <Card
                    src={'https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=240'}
                    title='Entire homes'
                />
                <Card
                    src={'https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480'}
                    title='Pets allowed'
                />
            </div>
            <h2 className='card__heading'>Discover Experiences</h2>
            <div className='home__section'>
                
                <Card
                src='https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=240'
                title='Online Experiences'
                description='Live, interactive activities led by Hosts.'
                />
                <Card
                src='https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=240'
                title='Local Experiences'
                description='Local things to do.'
                />
                <Card
                src='https://i.pinimg.com/originals/1e/0c/2d/1e0c2d8ead039ae0c060a84c9b3f56bc.jpg'
                title='Relax'
                description='Take a small detour.'
                />
                <Card
                src='https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=240'
                title='Wanderlust'
                description='Travel from home with Online Experiences.'
                />               
            </div>
        </div>
    )
}

export default Home
