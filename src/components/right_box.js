import React, { Component } from 'react';


class RightBox extends Component {
    constructor(props){
        super(props);

        this.state = {term: 'Hi'};
    }

    render() {
        return (
            <input 
            value={this.state.term} 
            onChange={ (event) => this.handleChange(event) }
            />
        );
    }
    
    handleChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onInpuntChange(term){
        this.setState({term})
    }
}

export default RightBox;