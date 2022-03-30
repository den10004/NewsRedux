import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  COMMENTS_LOAD,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from "./type";

export function incrementLikes() {
  return {
    type: INCREMENT,
  };
}

export function decrementLikes() {
  return {
    type: DECREMENT,
  };
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id,
  };
}

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function errorOn(text) {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text,
    });
    setTimeout(() => {
      dispatch(ErrorOff());
    }, 2000);
  };
}

export function ErrorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}

export function commentsLoad() {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await fetch(
     //  "https://jsonplaceholder.typicode.com/comments?_limit=10"
     // "https://nomoreparties.co/news/v2/everything?language=ru&sortBy=publishedAt&pageSize=50&qInTitle=russia&apiKey=10e8db0981ec4941becf1c27cd92454d"
      "https://newsapi.org/v2/everything?language=ru&sortBy=publishedAt&pageSize=100&qInTitle=russia&apiKey=10e8db0981ec4941becf1c27cd92454d"
      );


    const jsonDataNews = await response.json();
    // const jsonData = await response.json();
    const jsonData = jsonDataNews.articles
  //    console.log(jsonData)
      dispatch({
        type: COMMENTS_LOAD,
        data: jsonData,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn("ошибка API"));
      dispatch(loaderOff());
    }
  };
}
