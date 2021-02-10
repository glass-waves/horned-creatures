import React, { Component } from 'react'
import ImageItem from './ImageItem'

export default class ImageList extends Component {
    render() {
        const creatureList = this.props.creatureList;
        const imageList = creatureList.map(creature => <ImageItem creature = {creature}/>);
        return (
            <div className="imageList">
                { imageList }
            </div>
        )
    }
}
