import { setTimerId, setWordList, timerSet } from "../store/actions";
import { store } from "../store/store";
// import wordlist from "../wordlists/got.json"

export const resetTest = async () => {
    const { dispatch, getState } = store;
    const {
        time: { timerId },
        preferences: { timeLimit, type },
    } = getState();
    document
        .querySelectorAll(".wrong, .right")
        .forEach((el) => el.classList.remove("wrong", "right"));
    if (timerId) {
        clearInterval(timerId);
        dispatch(setTimerId(null));
    }
    import(`../wordlists/${type}.json`).then((words) =>
        dispatch(setWordList(words.default))
    );
    dispatch(timerSet(timeLimit));
};
