import React, { Component} from 'react';

class List extends Component {



    render() {
        // console.log(this.props)
        const list_li = this.props.list.map((item) => { return (<li  onClick={() => this.props.onHandleSelectedItem(item)}>{item}</li>)});
        return (
            <ul>
              {list_li}
            </ul>
        );
    }

}

export default List;