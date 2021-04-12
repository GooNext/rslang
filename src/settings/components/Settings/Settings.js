import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Row, Col } from 'react-bootstrap'

import { SettingOutlined } from '@ant-design/icons'
import { fetchJSON } from '../../../common/utils'

import { setSettings } from '../../redux'
import settingsSelector from '../../redux/selectors'

import { userIdSelector, tokenSelector } from '../../../auth/redux/selectors'

import { setErrorInfo } from '../../../common/redux'

import styles from './Settings.module.css'

const cardsHintsInfo = [
  {
    title: 'Перевод слова',
    name: 'wordTranslate',
  },
  {
    title: 'Предложение с объяснением',
    name: 'definition',
  },
  {
    title: 'Перевод предложений',
    name: 'sentenceTranslate',
  },
  {
    title: 'Транскрипция',
    name: 'transcription',
  },
  {
    title: 'Картинка-ассоциация',
    name: 'wordImage',
  },
]

const cardsHintsNames = [
  'wordTranslate',
  'definition',
  'sentenceTranslate',
  'transcription',
  'wordImage',
]

const cardsBtnsInfo = [
  {
    title: 'Удалить',
    name: 'deleteBtn',
  },
  {
    title: 'Переместить в сложные',
    name: 'difficultBtn',
  },
  {
    title: 'Показать ответ',
    name: 'showAnswerBtn',
  },
]

const intervalsInfo = [
  {
    title: 'Легко',
    name: 'easyInterval',
    bgColor: '#7aa0eb',
  },
  {
    title: 'Средне',
    name: 'mediumInterval',
    bgColor: '#007bff',
  },
  {
    title: 'Сложно',
    name: 'hardInterval',
    bgColor: '#1a00c5',
  },
]

const interactionsInfo = [
  {
    title: 'Автоматическое воспроизведение звука',
    name: 'autoSoundPlay',
  },
  {
    title: 'Подсказки интерфейса',
    name: 'interfaceHints',
  },
]

const Settings = () => {
  const dispatch = useDispatch()
  const settings = useSelector(settingsSelector)
  const userId = useSelector(userIdSelector)
  const token = useSelector(tokenSelector)
  // так как изменения происходят при нажатии кнопки сохранить
  // - использую локальный стейт для изменения настроек
  const [formSettings, setFormSettings] = useState(settings)
  const checkedHints = useMemo(
    () =>
      cardsHintsNames.reduce(
        (acc, state) => (formSettings.optional[state] ? acc + 1 : acc),
        0
      ),
    [formSettings]
  )

  const endpoint = useMemo(() => `users/${userId}/settings`, [userId])

  useEffect(() => {
    const newSettings = { ...settings, optional: { ...settings.optional } }
    setFormSettings(newSettings)
  }, [settings])

  const submitFetchOptions = useMemo(
    () => ({
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formSettings),
    }),
    [formSettings, token]
  )

  // Запрос, чтобы поместить настройки

  const handleChange = useCallback(
    ({ target }) => {
      const { name, type, checked, value } = target
      const newFormSettings = { ...formSettings }
      if (name === 'wordsPerDay') {
        newFormSettings[name] = type === 'checkbox' ? checked : value
      } else {
        newFormSettings.optional[name] = type === 'checkbox' ? checked : value
      }
      setFormSettings(newFormSettings)
    },
    [formSettings, setFormSettings]
  )

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      if (checkedHints) {
        fetchJSON(endpoint, submitFetchOptions)
          .then(({ id, ...data }) => dispatch(setSettings(data)))
          .catch(() => dispatch(setErrorInfo('Ошибка при изменении настроек')))
      }
    },
    [dispatch, endpoint, submitFetchOptions, checkedHints]
  )

  const cancelSubmit = useCallback(() => {
    const newSettings = { ...settings, optional: { ...settings.optional } }
    setFormSettings(newSettings)
  }, [setFormSettings, settings])

  const createCheckboxes = useCallback(
    (cardsInfo) =>
      cardsInfo.map(({ title, name }) => (
        <label key={name} htmlFor={name} className={styles.CheckboxContainer}>
          <input
            name={name}
            id={name}
            checked={formSettings.optional[name]}
            type="checkbox"
            onChange={handleChange}
          />
          <span className={styles.Checkmark} />
          {title}
        </label>
      )),
    [handleChange, formSettings]
  )

  return (
    <>
      <div className="header-page">
        <h1 className="game-title">
          Настройки
          <SettingOutlined />
        </h1>
      </div>
      <form className={styles.Settings} onSubmit={handleSubmit}>
        <Row>
          <Col lg={12}>
            <div className={styles.CardsAmount}>
              <h2>Количество карточек</h2>
              <div className={styles.CardsAmountForm}>
                <Col>
                  <label htmlFor="newCardsAmount">
                    Новых слов в день
                    <input
                      type="number"
                      name="newCardsAmount"
                      id="newCardsAmount"
                      min={1}
                      value={formSettings.optional.newCardsAmount}
                      onChange={handleChange}
                    />
                  </label>
                </Col>
                <label htmlFor="wholeCardsAmount">
                  Максимальное количество карточек в день
                  <input
                    type="number"
                    name="wordsPerDay"
                    id="wordsPerDay"
                    min={1}
                    value={formSettings.wordsPerDay}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <h2>Информация на карточках</h2>
            {!checkedHints && (
              <span style={{ color: 'red' }}>Выберите хотя бы 1 пункт</span>
            )}
            {createCheckboxes(cardsHintsInfo)}
          </Col>
          <Col lg={4}>
            <h2>Добавить кнопки к карточкам</h2>
            {createCheckboxes(cardsBtnsInfo)}
          </Col>
          <Col lg={4}>
            <h2>Настроить интервалы повторения</h2>
            {intervalsInfo.map(({ title, name, bgColor }) => (
              <label key={name} htmlFor={name} className={styles.Intervals}>
                <div
                  style={{
                    marginLeft: 0,
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: bgColor,
                  }}
                />
                <div style={{ color: '#333' }}>{title}</div>
                <input
                  name={name}
                  id={name}
                  value={formSettings.optional[name]}
                  type="number"
                  onChange={handleChange}
                  min={1}
                />
              </label>
            ))}
          </Col>
        </Row>
        <div className={styles.CardsInteractions}>
          {interactionsInfo.map(({ title, name }) => (
            <div className={styles.Interaction} key={name}>
              <h2>{title}</h2>
              <label htmlFor={name} className={styles.Switch}>
                <input
                  name={name}
                  id={name}
                  checked={formSettings.optional[name]}
                  type="checkbox"
                  onChange={handleChange}
                />
                <span className={styles.Slider} />
              </label>
            </div>
          ))}
        </div>
        <div className={styles.FormControls}>
          <Button
            variant="outline-primary"
            onClick={cancelSubmit}
            className={styles.OutlineButton}
          >
            Отменить
          </Button>
          <Button
            variant="primary"
            type="submit"
            className={styles.SubmitButton}
          >
            Сохранить
          </Button>
        </div>
      </form>
    </>
  )
}

export default Settings
