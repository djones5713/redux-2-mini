import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import { requestArticles } from '../../components/ducks/hackerNewsReducer';
import { connect } from  'react-redux';

class HackerNews extends Component {

componentDidMount(){
  this.props.requestArticles();
}

  render() {
    console.log(this.props)
    const { articles, loading } = this.props;
    const mappedArticles = articles.map(article => (
    <Card key={article.id} article={article} />
    ));
    
    return (
      <div className='news-container'>
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {loading ? <Loading /> : <div>{mappedArticles}</div>}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state.hackerNews;
}
const mapDispatchToProps = {
  requestArticles: requestArticles
}
const myConnect = connect(
  mapStateToProps,
  mapDispatchToProps
  )
export default myConnect(HackerNews);


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}