import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ButtonBackToHome from '../components/ButtonBackToHome'

const API = `http://www.omdbapi.com/?apikey=28187bdd&`

export default class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
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
        console.log('PROPS FROM ROUTER')
        console.log(this.props)
        const {id} = this.props.match.params
        this._fetchDetails({id})
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
                <ButtonBackToHome />
            </div>
        )
    }
}
