/**
 * Created by munis on 4/20/17.
 */
import React,{Component} from 'react';
import BookList from '../containers/book-list';

export default class App extends Component {
    render() {
        return(
            <div>
            <BookList />
            </div>
        )
    }
};