import './App.css';

import React, { Component } from 'react'
import ImageList from './ImageList';
import Dropdown from './Dropdown';
import Header from './Header';
import { generateFilters } from './utils.js';

export default class InnerApp extends Component {

  componentDidMount() {
    console.log('did mount!')
    //pull in data array from main app
    const dataList = this.props.dataList;

    //generate an array of strings of all properties on one of the objects
    const filterList = generateFilters(dataList);
    for (const filter of filterList) {
      this.state[filter] = '';
    }
  }
  state = {

  }


  // a method that returns a function handler specific to the filter ???
  handlerGenerator = (filter) => {
    return (e) => {
      this.setState({
        [filter]: e.target.value
      })

    }
  }


  render() {


    // for each filter in the list, create a state property 
    //pull in data array from main app
    const dataList = this.props.dataList;

    //generate an array of strings of all properties on one of the objects
    const filterList = generateFilters(dataList);



    //function that takes in the data array and filter list. For each data object, it loops through the filter list, checking the property in the object against the property in the state object. If it does not in one, it will return false.  ???
    const filterLogic = (list, filters) => {
      const filteredArray = list.filter(data => {
        const doesItPass = [];
        for (const filter of filters) {
          if (!this.state[filter]) {
            doesItPass.push(true);
          } else if (data[filter] != this.state[filter]) {
            doesItPass.push(false);
          }
        }
        if(doesItPass.includes(false)) {
          return false
        } else {
          return true;
        }
      })
      return filteredArray
    }

    //create a filtered version of the data array using function above
    const filteredArray = filterLogic(dataList, filterList);
    //create an empty array to store dropdown elements
    const dropdownEls = [];

    //for each filter push a Dropdown component into the dropdowns array
    for (const filter of filterList) {
      dropdownEls.push(<Dropdown
        keyName={filter}
        list={dataList}
        value={this.state[filter]}
        handleChange={this.handlerGenerator(filter)} />)
    }

    return (

      <div className="mainDiv">

        <Header />

        <form>
          {dropdownEls}
        </form>

        <ImageList filteredList={filteredArray} />

      </div>
    )
  }
}
