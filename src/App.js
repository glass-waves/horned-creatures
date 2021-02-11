import React, { Component } from 'react';
import creatures from './data.js';
import InnerApp from './InnerApp.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <InnerApp dataList={creatures} />
                <InnerApp dataList={creatures} />
                <InnerApp dataList={creatures} />
            </div>
        )
    }
}
