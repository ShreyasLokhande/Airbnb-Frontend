import React,{useState} from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'
import Search from './Search.js'
import {useHistory} from 'react-router-dom'

function Banner() {
    const [showSearch, setShowSearch] = useState(false)
    const history = useHistory();
    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search/>}
                <Button variant='outlined' className='banner__searchButton' onClick={() => {
                    setShowSearch(!showSearch)
                }}>{showSearch ? "Hide" : "Show Dates"}</Button>
            </div>
            <div className='banner__info'>
                <h1>The Greatest Outdoors 
                    Wishlists curated by Airbnb.</h1>
                <h5>Plan a different kind of 
                    gateway to uncover the hidden 
                    gems near you.
                </h5>
                <Button variant='outlined' onClick={() => {
                    history.push('/search')
                }}>Explore Near by</Button>
            </div>
        </div>
    )
}

export default Banner
