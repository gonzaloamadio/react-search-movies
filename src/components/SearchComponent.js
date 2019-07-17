import React, { Component } from 'react'
import SearchFormController from './SearchFormController'
import SearchResults from './SearchResults'

export default class SearchComponent extends Component {
    
    state = {results: []}

    _handleResults = (results) => {
      this.setState({results})
    }

    render() {
        return (
        <div>    
            <div className='SearchForm-wrapper'>
            <SearchFormController onResults={this._handleResults}/>
            </div>
            {this.state.results.length === 0
            ? <p>Sin Resultados</p>
            : <SearchResults results={this.state.results}/>
            } 
        </div>
        )
    }
}
