import React from 'react'
import { Title } from '../components/Title'
import SearchComponent from '../components/SearchComponent'

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Title>Search Movies</Title>
                <div className='SearchForm-wrapper'>
                <SearchComponent />
                </div>
            </React.Fragment>
        )
    }
}