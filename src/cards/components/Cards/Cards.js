/* eslint-disable max-len */
import React, { useMemo, useCallback } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';

import { CreditCardOutlined } from '@ant-design/icons';
import { setCards, setCardsTotal } from '../../redux';
import { cardsArrSelector, cardsModeSelector, gameEndedSelector } from '../../redux/selectors';
import {
  wordsPerDaySelector,
  newCardsAmountSelector,
} from '../../../settings/redux/selectors';
import { userIdSelector } from '../../../auth/redux/selectors';

import useAPI from '../../../common/utils';

import Modal from '../Modal/Modal';
import CardsCarousel from '../CardsCarousel/CardsCarousel';
import Progress from '../Progress/Progress';
import styles from './Cards.module.css';

const options = {};

const Cards = () => {
  const dispatch = useDispatch();
  const gameEnded = useSelector(gameEndedSelector);
  const cardsArr = useSelector(cardsArrSelector);
  const cardsMode = useSelector(cardsModeSelector);
  const wordsPerDay = useSelector(wordsPerDaySelector);
  const newCardsAmount = useSelector(newCardsAmountSelector);
  const userId = useSelector(userIdSelector);

  const url = useMemo(() => {
    let aggregatedUrl = `users/${userId}/aggregatedWords?`;
    const date = new Date(Date.now());
    const dateString = date.toLocaleDateString('en-US');
    const userWordsQuery = `{"$and":[{"userWord.optional.nextDate":"${dateString}", "userWord.optional.learning":${true}}]}`;
    switch (cardsMode) {
      case 'new':
        aggregatedUrl += `wordsPerPage=${newCardsAmount}&filter={"userWord":null}`;
        break;
      case 'repeat':
        aggregatedUrl += `wordsPerPage=${wordsPerDay}&filter=${userWordsQuery}`;
        break;
      default:
        aggregatedUrl += `wordsPerPage=${wordsPerDay}&filter={"$or":[${userWordsQuery},{"userWord":null}]}`;
        break;
    }
    return newCardsAmount ? aggregatedUrl : null;
  }, [userId, newCardsAmount, wordsPerDay, cardsMode]);

  const action = useCallback((data) => {
    batch(() => {
      const cards = data[0].paginatedResults;
      dispatch(setCards(cards));
      dispatch(setCardsTotal(cards.length));
    });
  }, [dispatch]);

  useAPI(url, options, action);

  if ((!cardsArr || !cardsArr.length) && !gameEnded) {
    return (
      <div className={styles.bgColor}>
        <div className={styles.EmptyCards}>
          <h1>Карточек не осталось</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="header-page">
        <h1 className="game-title">
          Карточки
          <CreditCardOutlined />
        </h1>
      </div>
      <div className={styles.bgColor}>
        <div className={styles.Container}>
          {gameEnded
            ? <Modal />
            : (
              <>
                <CardsCarousel />
                <Progress />
              </>
            )}
        </div>
      </div>
    </>
  );
};

export default Cards;
