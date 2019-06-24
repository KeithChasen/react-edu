import React, { Component } from 'react'

class Square extends Component {

    render() {
        const { value } = this.props
        return (
            <button className="square" onClick={() => {alert('click number: ' + value)}}>
                {value}
            </button>
        );
    }
}

export default Square