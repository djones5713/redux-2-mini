import axios from 'axios';


const initialState = {
    loading: false, 
    articles: []
}

const REQUEST_ARTICLES = "REQUEST_ARTICLES";

export const resquestArticles = () => {
    let articles = axios.get('/api/medium').then(res => res.data)
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}

export default function ( state = initialState, action ){
 switch(action.type){
     case REQUEST_ARTICLES + '_PENDING':
         return { ...state, loading: true }
     case REQUEST_ARTICLES + '_FULFILLED':
         return { loading: false, articles: action.payload}
     case REQUEST_ARTICLES + '_REJECTED':
         return { loading: false, articles: action.payload }; 
     default: 
         return state;
 }
   
}