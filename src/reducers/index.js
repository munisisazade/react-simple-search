/**
 * Created by munis on 4/20/17.
 */
import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';
import Munis from './reducer_active_book';

const rootReducer = combineReducers({
   books:BooksReducer,
   activeBook: Munis
});


export default rootReducer;