import { createStore, applyMiddleware, combineReducers } from 'redux';
import hackerNewReducer from './components/ducks/hackerNewsReducer';
import promiseMiddleware from 'redux-promise-middleware';
import mediumReducer from '../src/components/ducks/mediumReducer';
import redditReducer from './components/ducks/redditReducer';

const rootReducer = combineReducers({
    hackerNews: hackerNewReducer,
    medium: mediumReducer,
    reddit: redditReducer
})

export default createStore(rootReducer, 
    applyMiddleware(promiseMiddleware));

