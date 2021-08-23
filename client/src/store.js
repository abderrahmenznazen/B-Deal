import{createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const Middeleware = [thunk];
const store = createStore( 
    rootReducer,    
    initialState,
    compose(
        applyMiddleware(...Middeleware),
        window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
    )
);
export default store;
