import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import { resquestArticles } from '../ducks/mediumReducer';
import { connect } from 'react-redux';

class Medium extends Component {
componentDidMount(){
  this.props.resquestArticles();
}
  render() {
    console.log(this.props)
    const articles = this.props.articles.map((article => 
    <Card key={article.id} article={article} />
    ));

    return (
      <div className='news-container'>
        <img src="./mediumLogo.png" style={styles.logo} alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.medium;
}

const mapDispatchToProps = {
  resquestArticles: resquestArticles
}

const myConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default myConnect(Medium);

const styles = {
  logo: { width: '250px' }
}