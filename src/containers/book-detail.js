/**
 * Created by munis on 4/20/17.
 */
import React,{Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return(
                <h3>Select book to get started</h3>
            )
        }
        return(
            <div>
                <h3>Details for:</h3>
                <p><b>Title:</b>{this.props.book.title}</p>
                <p><b>Pages:</b>{this.props.book.pages}</p>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}


export default connect(mapStateToProps)(BookDetail);