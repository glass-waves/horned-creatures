import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        const keyNameVar = this.props.keyName;
        const list = this.props.list;
        const listWithRepeats = [];
        list.map(listItem => listWithRepeats.push(listItem[keyNameVar]));
        const listWithoutRepeats = new Set(listWithRepeats);
        const keyArray = Array.from(listWithoutRepeats);

        const dropdownList = keyArray.map(listItem => <option value={listItem} key={listItem}> {listItem}</option>)
        return (
            <select 
            onChange = {this.props.handleChange}>
                <option value=''>Filter by {keyNameVar}</option>
                {dropdownList}
            </select>
        )
    }

}
