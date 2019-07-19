import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    id : PropTypes.string,
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    poster: PropTypes.string,
};

const defaultProps = {
    poster: "https://bulma.io/images/placeholders/1280x960.png"
};

export default class Movie extends React.Component {
    render() {
        const {id,title, poster, year} = this.props
        return (
            <React.Fragment>
                <a href={`?id=${id}`} className="card">
                    <div className="card-image">
                        <figure className="image">
                        <img src={poster} alt={title} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{title}</p>
                                <p className="subtitle is-6">{year}</p>
                            </div>
                        </div>
                    </div>
                </a>
                
            </React.Fragment>
        );
    }
}

 Movie.propTypes = propTypes;
 Movie.defaultProps = defaultProps;