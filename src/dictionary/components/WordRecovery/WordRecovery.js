import React, {
  useCallback, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import useAPI from '../../../common/utils';

import {
  isAllRecoveredSelector,
  selectedWordsSelector,
} from '../../redux/selectors';
import { userIdSelector } from '../../../auth/redux/selectors';

import styles from './WordRecovery.module.css';

const date = new Date(Date.now());
const nextDate = date.toLocaleDateString('en-US');

const WordRecovery = ({ wordId, userWord, onRecovery }) => {
  const userId = useSelector(userIdSelector);
  const isAllRecovered = useSelector(isAllRecoveredSelector);
  const selectedWords = useSelector(selectedWordsSelector);

  const [recovered, setRecovered] = useState(false);

  const url = useMemo(
    () => `users/${userId}/words/${wordId}`, [userId, wordId],
  );

  const fetchOptions = useMemo(() => ({
    method: 'PUT',
    body: JSON.stringify({
      ...userWord,
      'optional': {
        ...userWord.optional,
        'deleted': false,
        'difficult': false,
        'learning': true,
        'nextDate': nextDate,
      },
    }),
  }), [userWord]);

  // условие для отправки запроса
  const condition = useMemo(
    () => (isAllRecovered && selectedWords[wordId]) || recovered,
    [isAllRecovered, recovered, selectedWords, wordId],
  );

  // действие после запроса, setTimeout для предотвращения утечки памяти
  const action = useCallback(
    () => setTimeout(() => onRecovery(true)), [onRecovery],
  );

  const handleClick = useCallback((event) => {
    setRecovered(true);
  }, []);

  // запрос, возвращающий слово в раздел "изучаемые"
  useAPI(url, fetchOptions, action, condition);

  return (
    <div
      className={styles.RecoveryContainer}
      onClick={handleClick}
    >
      <img
        src="/assets/images/dictionary/recoveryIcon.svg"
        alt="recover word"
      />
    </div>
  );
};

WordRecovery.propTypes = {
  wordId: PropTypes.string.isRequired,
  userWord: PropTypes.object.isRequired,
  onRecovery: PropTypes.func.isRequired,
};

export default WordRecovery;
