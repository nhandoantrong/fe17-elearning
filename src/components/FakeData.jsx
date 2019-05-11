import React, { Component } from 'react';
import data from '../data';

class FakeData extends Component {
    generateFakeData = () => {
        localStorage.setItem('courses', JSON.stringify(data))
    }

    render() {
        return (
            <div>
                <button onClick={this.generateFakeData} >Tạo fake data</button>
            </div>
        );
    }
}

export default FakeData;