import React, { Component} from "react";
import { connect } from 'react-redux'

class BookDetail extends Component {
    render() {
        if(!this.props.activeBook) {
            return <div> Select a Book </div>;
        }

        return (
            <div>
                <h3>BookDetails is: </h3>
                <h5>{this.props.activeBook.title}</h5>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);