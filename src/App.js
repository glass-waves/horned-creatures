import './App.css';
import creatures from './data.js';
import React, { Component } from 'react'
import ImageList from './ImageList';
import Dropdown from './Dropdown';

export default class App extends Component {

  state = {
    filter1: '',
    filter2: '',
  }
  handleFilter1 = (e) => {
    this.setState({
      filter1: e.target.value
    })
  }
  handleFilter2 = (e) => {
    this.setState({
      filter2: e.target.value
    })
  }
  render() {

    const filter1 = "keyword";
    const filter2 = "horns";

    const filteredList = creatures.filter(creature => {
      if(!this.state.filter1) return true;
      if(creature.keyword === this.state.filter1) return true;
      return false;
    }).filter(creature2 => {
      if(!this.state.filter2) return true;
      if(creature2.horns == this.state.filter2) return true;
      return false;
    })
    console.log(filteredList);

console.log(this.state)
    return (
      <div>
        <form>

          <Dropdown 
            keyName={filter1} 
            list={creatures} 
            value={this.state.filter1}
            handleChange={this.handleFilter1} />

          <Dropdown 
            keyName={filter2} 
            list={creatures} 
            value={this.state.filter2}
            handleChange={this.handleFilter2} />

        </form>
        <ImageList creatureList={filteredList} /> 
      </div>
    )
  }
}
