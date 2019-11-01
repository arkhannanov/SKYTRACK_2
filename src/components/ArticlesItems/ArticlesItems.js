import React, {Component} from "react";
import './ArticlesItems.scss';

class ArticlesItems extends Component {

    constructor(props) {
        super(props);

        this.createArticles = this.createArticles.bind(this);
    }

    onArticleClick(e, key) {
        this.props.toggleIsArticleHidden(key);
    }

    onArticleCommentsButtonClick(e, key) {
        this.props.toggleArticleComments(key);
    }

    createArticles(item, index) {
        return (
            <div className="article">
                <div className="article__title" onClick={(e) => {
                    this.onArticleClick(e, item.key)
                }}>{item.title}</div>
                <div className={item.isHidden ? "article__content_is-hidden" : "article__content"}>{item.content}</div>
                <button
                    onClick={(e) => {
                        this.onArticleCommentsButtonClick(e, item.key)
                    }}
                    className="article__button">{item.commentsAreOpen ?  "Закрыть комментарии" :  "Открыть комментарии"}</button>
                {item.commentsAreOpen
                    ? <div className="article__commets">
                        {item.comments.map(el => <div>{el}</div>)}
                    </div>
                    : null
                }

            </div>
        )
    }

    render() {
        let articles = this.props.articles;
        let listItems = articles.map((item, index) => this.createArticles(item, index));

        return (

            <div>{listItems}</div>

        );
    }
};

export default ArticlesItems;