import React, { Component } from 'react'
import PropTypes from 'prop-types';

const API = `http://www.omdbapi.com/?apikey=28187bdd&`

export default class Detail extends Component {
    static propTypes = {
        id: PropTypes.string
    }
    state = { movie: {} }

    _fetchDetails({id}){
        fetch(API + `i=${id}`)
        .then(res => res.json())
        .then(movie => {
            console.log(movie)
            this.setState({movie})
        })
    }

    componentDidMount(){
        const {id} = this.props
        this._fetchDetails({id})
    }

    _goBack(){
        window.history.back()
    }

    render() {
        const {Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return (
            <div>
                <h1>{Title}</h1>
                <img alt={Title} src={Poster} />
                <h3>{Actors}</h3> 
                <span>{Metascore}</span>
                <p>{Plot}</p>
                <button onClick={this._goBack}>Volver</button>
            </div>
        )
    }
}
