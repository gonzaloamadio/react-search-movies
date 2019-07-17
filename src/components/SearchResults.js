import React from 'react'
import Movie from './Movie'

export default function SearchResults(props) {
    return (
        props.results.map(movie => {
            return <p key={movie.imdbID}>{movie.Title}</p>
        })
    )
}
