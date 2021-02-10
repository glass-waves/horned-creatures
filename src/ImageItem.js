import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        const creature = this.props.creature;
        return (
            <div className="imageItem" key={creature.keyword}>
                <h3>{creature.title}</h3>
                <p>Number of horns: {creature.horns}</p>
                <img src={creature.url} alt={creature.description} />
            </div>
        )
    }
}
