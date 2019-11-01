import React, {Component} from 'react';
import ArticlesItems from '../ArticlesItems/ArticlesItems';
import connect from "react-redux/es/connect/connect";
import {toggleArticleComments, toggleIsArticleHidden} from "../../redux/articles-reducer";

class ArticlesContainer extends Component {

    render() {

        return (
            <ArticlesItems
                articles={this.props.articles}
                toggleIsArticleHidden={this.props.toggleIsArticleHidden}
                toggleArticleComments={this.props.toggleArticleComments}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        articles: state.articlesPage.articles,
    }
}

export default connect(mapStateToProps, {toggleIsArticleHidden, toggleArticleComments})(ArticlesContainer);

