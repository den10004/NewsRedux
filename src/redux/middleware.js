import { COMMENT_CREATE } from "./type";
import { errorOn } from "./actions";

const badWords = ["козёл", "осёл"];

export function spamFilter(store) {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        const hasbadWords = badWords.some((res) =>
          action.data.text.includes(res)
        );
        if (hasbadWords) {
          return store.dispatch(errorOn("плохое слово"));
        }
      }
      return next(action);
    };
  };
}
