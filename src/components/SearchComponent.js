import React, { Component } from 'react'
import SearchFormController from './SearchFormController'
import SearchResults from './SearchResults'

export default class SearchComponent extends Component {
    
    state = {results: [], usedSearch: false}

    _handleResults = (results) => {
      this.setState({results, usedSearch:true})
    }

    _renderResults(){
        return this.state.results.length === 0
            ? <p>- No Results -</p>
            : <SearchResults results={this.state.results}/>
    }

    render() {
        return (
        <div>    
            <div className='SearchForm-wrapper'>
            <SearchFormController onResults={this._handleResults}/>
            </div>
            {this.state.usedSearch === false
            ? <small>Use the search bar to sear for movie by title</small>
            : this._renderResults()
            }
        </div>
        )
    }
}
