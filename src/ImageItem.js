import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        const creature = this.props.creature;
        return (
            <div className="container">
                <div className="imageItem" key={creature.keyword}>
                    <div>
                        <h3>{creature.title}</h3>
                        <p># of horns: <span className="orange">{creature.horns}</span></p>
                    </div>
                    <img src={creature.url} alt={creature.description} />
                </div>
            </div>
            
        )
    }
}
