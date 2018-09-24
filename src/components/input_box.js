import React, { Component } from 'react';


class InputBox extends Component {
    render() {
        return (
            <input type="text"
            name='input-box'
            value={this.props.selectedItem} />
        );
    }
}


export default InputBox;