import React, { Component } from 'react'
import ImageItem from './ImageItem'

export default class ImageList extends Component {
    render() {
        const filteredList = this.props.filteredList;
        const imageList = filteredList.map(creature => <ImageItem creature = {creature}/>);
        return (
            <div className="imageList">
                { imageList }
            </div>
        )
    }
}
