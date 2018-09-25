import { combineReducers } from 'redux';
import ReducerBook from './reducer-books';
import ReducderBookSelected from './reducer_active_book'

const rootReducer = combineReducers({
    books: ReducerBook,
    activeBook: ReducderBookSelected
});

export default rootReducer;