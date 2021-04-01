import React, { useCallback, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, batch } from 'react-redux';

import {
  setCards, setLastCard, setAnswered, clearAnswer,
  pushMistakenWord, incrementPassedCards, setNavFetchOptions,
  setGameEnded, incrementNewWords, incrementCurrentStreak, setLongestStreak,
} from '../../redux';

import { fetchJSON } from '../../../common/utils';

import {
  cardsArrSelector, wasAnsweredSelector,
  mistakenWordsSelector, navFetchOptionsSelector,
} from '../../redux/selectors';

import { userIdSelector, tokenSelector } from '../../../auth/redux/selectors';

import {
  easyIntervalSelector,
  mediumIntervalSelector, hardIntervalSelector,
} from '../../../settings/redux/selectors';

import styles from './Intervals.module.css';

const date = new Date(Date.now());
const dateString = date.toLocaleDateString('en-US');

const addDays = (days) => {
  const resultDate = new Date();
  resultDate.setDate(resultDate.getDate() + +days);
  return resultDate.toLocaleDateString('en-US');
};

const Intervals = ({ wordId, userWord }) => {
  const dispatch = useDispatch();
  const cardsArr = useSelector(cardsArrSelector);
  const navFetchOptions = useSelector(navFetchOptionsSelector);
  // была ли отвечена карточка
  const wasAnswered = useSelector(wasAnsweredSelector);
  const mistakenWords = useSelector(mistakenWordsSelector);

  const token = useSelector(tokenSelector);
  const userId = useSelector(userIdSelector);

  // интервалы в изучении слов
  const easyInterval = useSelector(easyIntervalSelector);
  const mediumInterval = useSelector(mediumIntervalSelector);
  const hardInterval = useSelector(hardIntervalSelector);

  // было ли данное слово написано с ошибкой
  const wasMistaken = useMemo(
    () => mistakenWords[wordId], [mistakenWords, wordId],
  );

  // wordEndpoint для обновления слова пользователя
  const wordEndpoint = useMemo(
    () => `users/${userId}/words/${wordId}`, [userId, wordId],
  );

  const wordFetchOptions = useCallback((optional, difficulty) => {
    // существует ли слово в userwords
    const isUserWord = !!userWord.optional;
    const repeated = isUserWord
      ? userWord.optional.repeated + 1
      : 1;
    const progressStatus = isUserWord
      ? userWord.optional.progressStatus + 1
      : 1;
    const method = isUserWord ? 'PUT' : 'POST';
    return {
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...userWord,
        difficulty,
        'optional': {
          ...userWord.optional,
          ...optional,
          'prevDate': dateString,
          repeated,
          progressStatus,
          'deleted': false,
          'learning': true,
          ...navFetchOptions,
        },
      }),
    };
  }, [userWord, token, navFetchOptions]);

  const putWordsInDictionary = useCallback((optional, difficulty) => {
    fetchJSON(wordEndpoint, wordFetchOptions(optional, difficulty));
    dispatch(setNavFetchOptions({}));
  }, [wordEndpoint, wordFetchOptions, dispatch]);

  const intervalButtonsInfo = useMemo(() => ([
    {
      title: 'Повтор',
      bg: '#1f54be',
      handleArgs: { shouldRepeat: true, optional: {} },
    },
    {
      title: 'Легко',
      bg: '#DB7CF5',
      handleArgs: {
        shouldRepeat: false,
        difficulty: 'easy',
        optional: {
          nextDate: addDays(easyInterval),
          deleted: false,
          learning: true,
        },
      },
    },
    {
      title: 'Средне',
      bg: '#AA5DDB',
      handleArgs: {
        shouldRepeat: false,
        difficulty: 'medium',
        optional: {
          nextDate: addDays(mediumInterval),
          deleted: false,
          learning: true,
        },
      },
    },
    {
      title: 'Сложно',
      bg: '#7348BF',
      handleArgs: {
        shouldRepeat: false,
        difficulty: 'hard',
        optional: {
          nextDate: addDays(hardInterval),
          deleted: false,
          learning: true,
        },
      },
    },
  ]), [easyInterval, mediumInterval, hardInterval]);

  const handleButton = useCallback(({ shouldRepeat, optional, difficulty }) => {
    const newCards = [...cardsArr];
    const lastCard = newCards.shift();
    batch(() => {
      if (wasMistaken || !wasAnswered || shouldRepeat) {
        newCards.push(lastCard);
      }
      if (wasMistaken) {
        const newMistakenWord = {};
        newMistakenWord[wordId] = false;
        dispatch(pushMistakenWord(newMistakenWord));
        dispatch(setLongestStreak());
      }
      if (!wasMistaken && wasAnswered && !shouldRepeat) {
        dispatch(incrementCurrentStreak());
        dispatch(incrementPassedCards());
        if (!userWord.optional) dispatch(incrementNewWords());
        putWordsInDictionary(optional, difficulty);
      }
      dispatch(setCards(newCards));
      dispatch(setLastCard(lastCard));
      dispatch(clearAnswer());
      if (!newCards.length) {
        dispatch(setLongestStreak());
        dispatch(setGameEnded(true));
      }
    });
  }, [cardsArr, dispatch, wasMistaken, userWord,
    wasAnswered, wordId, putWordsInDictionary]);

  const intervalButtons = useCallback((clicked) => (
    intervalButtonsInfo.map(({ title, bg, handleArgs }) => (
      <Button
        className={styles.interval_btn}
        style={{ background: bg, border: bg }}
        key={title}
        onClick={() => clicked(handleArgs)}
      >
        {title}
      </Button>
    ))
  ), [intervalButtonsInfo]);

  return (
    <div className={styles.Intervals}>
      {
        wasAnswered
          ? intervalButtons(handleButton)
          : (
            <Button
              type="Button"
              className={styles.showAnswer}
              onClick={() => dispatch(setAnswered(true))}
            >
              Показать ответ
            </Button>
          )
      }
    </div>
  );
};

Intervals.propTypes = {
  wordId: PropTypes.string.isRequired,
  userWord: PropTypes.object,
};

Intervals.defaultProps = {
  userWord: {},
};

export default Intervals;
