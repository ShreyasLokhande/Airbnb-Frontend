import { ExpandMore, Language, Search } from '@material-ui/icons'
import React from 'react'
import './Header.css'
import {Avatar} from '@material-ui/core'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'


function Header() {

    const history = useHistory()

    return (
        <div className='header'>
            <Link to ='/'>
                <img className='header__icon'
                    src='https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg'
                    alt='Airbnb logo'
                />
            </Link>
           
            <div className='header__center'>
                <input type='text'/>
                <Search onClick={() => {
                    history.push('/search')
                }}/>
            </div>
            <div className='header__right'>
                <p>Become a Host</p>
                <Language/>
                <ExpandMore/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
