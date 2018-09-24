import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InputBox from './components/input_box';
import List from './components/list';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      list: this.list(),
      selectedItem: 'dddd'
    }
  }

  list(){
    return ['23123', '1234124', 'dfgdfgdgdfg'];
  }

  abc(item) {
    return this.setState({selectedItem: item})
  }


  render(){
    return (
      <div>
        <InputBox selectedItem={ this.state.selectedItem}/>
        <List list={this.state.list} onHandleSelectedItem={this.abc}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'))