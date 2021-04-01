import React, { useState, useCallback } from 'react';
import {
  Redirect,
  Link,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticatedSelector } from '../redux/selectors';
import { login } from '../redux';
import loginUser from '../utils';
import styles from './Auth.module.css';

import { setErrorInfo } from '../../common/redux';

const createUser = async (user) => {
  const url = 'https://afternoon-falls-25894.herokuapp.com/users';
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (rawResponse.status !== 200) {
    throw new Error('Incorrect e-mail or password');
  }

  return true;
};

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLogged = useSelector(isAuthenticatedSelector);
  const dispatch = useDispatch();

  const submitHandler = useCallback((event) => {
    event.preventDefault();

    createUser({ 'email': email, 'password': password })
      .then(() => loginUser({ 'email': email, 'password': password }))
      .then(({ userId, token }) => {
        dispatch(login({ email, token, userId }));
      })
      .catch(() => dispatch(setErrorInfo('Ошибка при создании пользователя')));
  }, [email, password, dispatch]);

  if (isLogged) return <Redirect to="/main" />;

  return (
    <div className={styles.Auth}>
      <Link to="/">
        <div className={styles.close}>
          <img
            src="/assets/images/common/x.svg"
            alt="вернуться на промо"
          />
        </div>
      </Link>
      <form onSubmit={submitHandler} className={styles.Form}>
        <h1 className="text-center mb-4">Регистрация</h1>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          pattern="[A-Za-z]{1,}"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Электронная почта"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          // eslint-disable-next-line max-len
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[+\-_@$!%*?&#.,;:[\]{}])(?=.*[A-Z]).{8,}"
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
          required
        />
        <button type="submit" className={styles.Button} id="button-create">
          Создать аккаунт
        </button>
        <Link
          className={styles.Link}
          to="/login"
        >
          У меня есть аккаунт
        </Link>
      </form>
    </div>
  );
};

export default Signup;
