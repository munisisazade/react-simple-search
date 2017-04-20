/**
 * Created by munis on 4/20/17.
 */
import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';


const rootReducer = combineReducers({
   books:BooksReducer
});


export default rootReducer;