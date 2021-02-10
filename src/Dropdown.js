import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {

        const keyNameVar = this.props.keyName;

        const list = this.props.list;

        const listWithRepeats = [];

        //turn array into an array with no repeats by passing through a set
        list.map(listItem => listWithRepeats.push(listItem[keyNameVar]));
        const listWithoutRepeats = new Set(listWithRepeats);
        const keyArray = Array.from(listWithoutRepeats);

        const dropdownList = keyArray.map(listItem => <option value={listItem} key={listItem}> {listItem}</option>)
        return (
            <div>
                <label for={keyNameVar}>Filter by <span className="orange">{keyNameVar}</span>: </label>
                <select
                    id={keyNameVar}
                    onChange={this.props.handleChange}>
                    <option value=''>None</option>
                    {dropdownList}
                </select>
            </div>

        )
    }

}
