import axios from 'axios';

const initalState = {
    loading: false,
    articles: []
};

const REQUEST_ARTICLES = "REQUEST_ARTICLES";

export const requestArticles = () => {
    let articles = axios.get('/api/hacker-news').then(res => res.data)
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}

export default function reducer(state = initalState, action){
 switch(action.type){
     case REQUEST_ARTICLES + '_PENDING' : 
        return {...state, loading: true}
     case REQUEST_ARTICLES + '_FULFILLED':
         console.log('PAYLOAD',action.payload)
         return {loading: false, articles: action.payload}
     case REQUEST_ARTICLES + '_REJECTED':
         return {...state, loading: false};
    default: 
        return state;
 }
}