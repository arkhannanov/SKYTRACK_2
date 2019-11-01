const TOGGLE_IS_ARTICLE_HIDDEN = 'TOGGLE_IS_ARTICLE_HIDDEN';
const TOGGLE_ARTICLE_COMMENTS = 'TOGGLE_ARTICLE_COMMENTS';

let initialState = {
    articles: [
        {
            key: 1,
            title: "Cтатья 1",
            content: "Контент 1",
            isHidden: true,
            commentsAreOpen: false,
            comments: [
                "комментарий 1",
                "комментарий 2",
                "комментарий 3",
                "комментарий 4",
                "комментарий 5",
            ]
        },
        {
            key: 2,
            title: "Cтатья 2",
            content: "Контент 2",
            isHidden: true,
            commentsAreOpen: false,
            comments: [
                "комментарий 1",
                "комментарий 2",
                "комментарий 3",
                "комментарий 4",
                "комментарий 5",
            ]
        },
        {
            key: 3,
            title: "Cтатья 3",
            content: "Контент 3",
            isHidden: true,
            commentsAreOpen: false,
            comments: [
                "комментарий 1",
                "комментарий 2",
                "комментарий 3",
                "комментарий 4",
                "комментарий 5",
            ]
        },
        {
            key: 4,
            title: "Cтатья 4",
            content: "Контент 4",
            isHidden: true,
            commentsAreOpen: false,
            comments: [
                "комментарий 1",
                "комментарий 2",
                "комментарий 3",
                "комментарий 4",
                "комментарий 5",
            ]
        },
        {
            key: 5,
            title: "Cтатья 5",
            content: "Контент 5",
            isHidden: true,
            commentsAreOpen: false,
            comments: [
                "комментраий 1",
                "комментраий 2",
                "комментраий 3",
                "комментраий 4",
                "комментраий 5",
            ]
        }
    ],
};

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_ARTICLE_HIDDEN:
            let articleKey = action.key;
            let articleIndex = state.articles.findIndex(el => el.key === articleKey);
            let updatedArray = [];


            for (let i = 0; i < state.articles.length; i += 1) {
                if (i === articleIndex) {
                    state.articles[i] = {
                        key: articleKey,
                        title: state.articles[i].title,
                        content: state.articles[i].content,
                        isHidden: !state.articles[i].isHidden,
                        commentsAreOpen: state.articles[i].commentsAreOpen,
                        comments: state.articles[i].comments
                    }
                }
                updatedArray[i] = state.articles[i];
            }
            return {
                ...state,
                articles: updatedArray
            };
        case TOGGLE_ARTICLE_COMMENTS:
            let commentsKey = action.key;
            let commentsIndex = state.articles.findIndex(el => el.key === commentsKey);
            let newCommentsArray = [];


            for (let i = 0; i < state.articles.length; i += 1) {
                if (i === commentsIndex) {
                    state.articles[i] = {
                        key: commentsKey,
                        title: state.articles[i].title,
                        content: state.articles[i].content,
                        isHidden: state.articles[i].isHidden,
                        commentsAreOpen: !state.articles[i].commentsAreOpen,
                        comments: state.articles[i].comments
                    }
                }
                newCommentsArray[i] = state.articles[i];
            }
            return {
                ...state,
                articles: newCommentsArray
            };
        default:
            return state;
    }
}

export const toggleIsArticleHidden = (key) => ({type: TOGGLE_IS_ARTICLE_HIDDEN, key});
export const toggleArticleComments = (key) => ({type: TOGGLE_ARTICLE_COMMENTS, key});

export default articlesReducer;