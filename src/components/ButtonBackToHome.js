import React from 'react'
import {Link} from 'react-router-dom'

const ButtonBackToHome = () => {
    return (
        <Link 
            className='button is-info'
            to='/'>
            Back Home
        </Link>
    )
}

export default ButtonBackToHome
