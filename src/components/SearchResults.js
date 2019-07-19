import React from 'react'
import Movie from './Movie'

export default function SearchResults(props) {
    return (
        <div className='MoviesList'>
            {
                props.results.map(movie => {
                    return (
                        <div key={movie.imdbID} className='MoviesList-item'>
                            <Movie 
                                id={movie.imdbID}
                                title={movie.Title}
                                poster={movie.Poster}
                                year={movie.Year}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
