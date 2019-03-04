import React, { Component } from 'react';

class Film extends Component {

    render() {

        return (
            <div className="film">
                {/* .children refers to the content of the Film tag in FilmList */}
                <link href={this.props.url}>{this.props.children}</link>
            </div>
        )

    }

}

export default Film;