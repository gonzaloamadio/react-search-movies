import React from 'react'

// {title} is the desestructuration of the props into title.
export const Title = ({children}) => (
    <h1 className="title">{children}</h1>
)

/*
import React, { Component } from 'react'

class Title extends Component {
    render() {
        return (
            <h1 className="title">{this.props.children}</h1>
        );
    }
}

export default Title;
*/