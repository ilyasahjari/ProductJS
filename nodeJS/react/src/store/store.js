import thunk from 'redux-thunk'
import productReducer from '../reducers/product';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: productReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
        
}

