import React, { Component } from 'react'
import SearchForm from './SearchForm';
import {fetchTitle} from './omdb-fetch'

const API = `http://www.omdbapi.com/?apikey=28187bdd&`

export default class SearchFormController extends Component {

    state = { inputMovie:'' }

    _handleSubmit = (e) => {
        e.preventDefault()
        //alert(this.state.inputMovie)
        const {inputMovie} = this.state
        //const {results, totalResults} = fetchTitle(inputMovie)
        fetch(API + `s=${inputMovie}`)
        .then(res => res.json())
        .then(results => {
            //console.log(results)
            const {Search = [], totalResults = '0'} = results
            console.log({Search,totalResults})
            this.props.onResults(Search || [])
        })
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }
    
    render() {
        return (
            <SearchForm handleSubmit={this._handleSubmit} handleChange={this._handleChange}  />
        )
    }
}
