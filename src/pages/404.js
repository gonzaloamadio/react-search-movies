import React from 'react'
import ButtonBackToHome from '../components/ButtonBackToHome'

const Page404 = () => {
    return (
        <React.Fragment>
            <h1 className='title'> 404! </h1>
            <h2 className='subtitle'>Page Not Found</h2>
            <ButtonBackToHome />
        </React.Fragment>
    )
}

export default Page404