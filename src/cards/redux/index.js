const INITIAL_STATE = {
  wasMistaken: true,
  mistakenWords: {},
  isShowingAnswer: false,
  wasAnswered: false,
  cardsArr: null,
  previousCard: null,
  cardsMode: 'new',
  passedCards: 0,
  newWords: 0,
  longestStreak: 0,
  cardsTotal: 0,
  currentStreak: 0,
  gameEnded: false,
  navFetchOptions: {},
};

export const setNavFetchOptions = (navFetchOptions) => ({
  type: 'SET_NAV_FETCH_OPTIONS',
  navFetchOptions,
});

export const setLongestStreak = (longestStreak) => ({
  type: 'SET_LONGEST_STREAK',
  longestStreak,
});

export const incrementCurrentStreak = () => ({
  type: 'INC_CURRENT_STREAK',
});

export const clearCards = () => ({
  type: 'CLEAR_CARDS',
});

export const setGameEnded = (gameEnded) => ({
  type: 'SET_GAME_ENDED',
  gameEnded,
});

export const setCardsTotal = (cardsTotal) => ({
  type: 'SET_CARDS_TOTAL',
  cardsTotal,
});

export const pushMistakenWord = (mistakenWord) => ({
  type: 'PUSH_MISTAKEN_WORD',
  mistakenWord,
});

export const incrementNewWords = (newWords) => ({
  type: 'INC_NEW_WORDS',
  newWords,
});

export const incrementPassedCards = () => ({
  type: 'INC_PASSED_CARDS',
});

export const setCardsMode = (cardsMode) => ({
  type: 'SET_CARDS_MODE',
  cardsMode,
});

export const setCards = (cardsArr) => ({
  type: 'SET_CARDS',
  cardsArr,
});

export const showAnswer = (isShowingAnswer) => ({
  type: 'SHOW_ANSWER',
  isShowingAnswer,
});

export const setLastCard = (previousCard) => ({
  type: 'SET_LAST_CARD',
  previousCard,
});

export const setAnswered = (wasAnswered) => ({
  type: 'SET_ANSWERED',
  wasAnswered,
});

export const clearAnswer = () => ({
  type: 'CLEAR_ANSWER',
  wasMistaken: true,
  isShowingAnswer: false,
  wasAnswered: false,
});

const cardsReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    ...payload
  } = action;

  switch (type) {
    case 'PUSH_MISTAKEN_WORD':
      return {
        ...state,
        mistakenWords: {
          ...state.mistakenWords,
          ...payload.mistakenWord,
        },
      };

    case 'INC_PASSED_CARDS':
      return {
        ...state,
        passedCards: state.passedCards + 1,
      };
    case 'INC_NEW_WORDS':
      return {
        ...state,
        newWords: state.newWords + 1,
      };
    case 'INC_CURRENT_STREAK':
      return {
        ...state,
        currentStreak: state.currentStreak + 1,
      };
    case 'SET_LONGEST_STREAK':
      return {
        ...state,
        longestStreak: state.currentStreak > state.longestStreak
          ? state.currentStreak
          : state.longestStreak,
        currentStreak: 0,
      };
    case 'CLEAR_CARDS':
      return { ...INITIAL_STATE };
    case 'SET_GAME_ENDED':
    case 'SET_CARDS_TOTAL':
    case 'SET_CARDS':
    case 'SET_LAST_CARD':
    case 'SHOW_ANSWER':
    case 'SET_ANSWERED':
    case 'CLEAR_ANSWER':
    case 'SET_NEW_WORDS':
    case 'SET_CARDS_MODE':
    case 'SET_NAV_FETCH_OPTIONS':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
