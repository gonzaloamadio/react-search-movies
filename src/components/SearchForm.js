import React, { Component } from 'react'

export default class SearchForm extends Component {
    render() {
        const {handleSubmit,handleChange} = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Find a movie"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>        
            </form>
        )
    }
}








