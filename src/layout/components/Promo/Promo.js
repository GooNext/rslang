/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FeatureCard from './FeatureCard/FeatureCard'
import Footer from './Footer/Footer'
import GameCard from './GameCard/GameCard'
import Header from './Header/Header'
import IntervalInfo from './IntervalInfo/IntervalInfo'
import PromoWrapper from './PromoWrapper'
import Study from './Study/Study'
import VideoBlock from './VideoBlock/VideoBlock'
import Rules from '../../../common/components/Modals/Rules'
import Exit from '../../../common/components/Modals/Exit'

export default function Promo() {
  return (
    <PromoWrapper>
      <Container>
        <div className="promo_bg">
          <Header />
          <Row className="promo_first">
            <Col lg={5}>
              <div className="huge_title">
                Мир принадлежит Вам! <br /> Вместе с нашим приложением!
              </div>
              <div className="main_page_text">
                Наше приложение — эффективный сервис увлекательной практики
                языка. Уже более 2-х человек (в смысле пока только мы -
                разработчики) во всем мире уже с нами. Присоединяйся!
              </div>
            </Col>
            <Col lg={7}>
              <div className="promo_animation">
                <img
                  className="illustration2"
                  src="./assets/images/promo/animationimg/bg.png"
                  alt="bg"
                />
                <img
                  className="man-float"
                  src="./assets/images/promo/animationimg/man.png"
                  alt="big colored pic"
                />
                <img
                  className="women-float"
                  src="./assets/images/promo/animationimg/women.png"
                  alt="big colored pic"
                />
                <img
                  className="coffee-float"
                  src="./assets/images/promo/animationimg/coffee.png"
                  alt="big colored pic"
                />
                <img
                  className="pig-float"
                  src="./assets/images/promo/animationimg/pig.png"
                  alt="big colored pic"
                />
              </div>
            </Col>
          </Row>
          <h2 className="promo_title_mid">Что под капотом?</h2>
          <div id="features" />
          <h2 className="promo_title_mid">Преимущества</h2>
          <div className="text_after_title">
            Плюшки, которые вы найдете в нашем приложении для себя и своих
            близких
          </div>
          <Container fluid>
            <Row>
              <Col xs={12} md={6}>
                <FeatureCard
                  title="Игры"
                  text={
                    'Безусловно, приобретать новые знания во время игры гораздо веселее.' +
                    ' Встречайте 6 увлекательных' +
                    ' красивых игр, чтобы учить английский было' +
                    ' веселее.'
                  }
                  src="./assets/images/promo/feature1.svg"
                />
              </Col>
              <Col xs={12} md={6}>
                <FeatureCard
                  className="top_pad"
                  title="Онлайн доступ"
                  text={
                    'Оффлайн курсы, репетитор - прекрасно, НО наши игры' +
                    ' и тренировки доступны всегда - 24/7. Играйте' +
                    ' когда вам удобно, и приобретайте знания!.'
                  }
                  src="./assets/images/promo/feature2.svg"
                />
              </Col>
              <Col xs={12} md={6}>
                <FeatureCard
                  title="Статистика прогресса"
                  text={
                    'Играете ли Вы или с чашечкой кофе,' +
                    ' а может быть учите слова - статистика по' +
                    ' изученным' +
                    ' словам всегда доступна в' +
                    ' настройках.'
                  }
                  src="./assets/images/promo/feature3.svg"
                />
              </Col>
            </Row>
          </Container>
          <div id="games" />
          <h2 className="promo_title_mid">Игры</h2>
          <div className="text_after_title">
            Английский не обязательно "зубрить". Гораздо приятнее -
            по-настоящему наслаждаться процессом при этом знания будут
            приобретаться сами собой.
          </div>
          <div className="wrapper_game">
            <GameCard
              src="./assets/images/promo/game_1.svg"
              title="English Puzzle"
              text={
                'Формирует навыки обратного перевода и написания ' +
                'английских слов.'
              }
            />
            <GameCard
              src="./assets/images/promo/game_2.svg"
              title="SpeakIt"
              text={'Тренируем письменные навыки' + ' составляя фразы.'}
            />
            <GameCard
              src="./assets/images/promo/game_5.svg"
              title="Аудиовызов"
              text="Улучшается восприятие разговорной речи на слух. "
            />
          </div>
          <img
            className="full_width"
            src="./assets/images/promo/full_width.svg"
            alt={'man on the table working with' + ' notebook'}
          />
          <div className="wrapper_game">
            <GameCard
              src="./assets/images/promo/game_4.svg"
              title="Спринт"
              text={
                'Учимся скоростному переводу с английского на ' +
                'русский язык. При тренировке используются слова из' +
                ' вашего словаря.'
              }
            />

            <GameCard
              src="./assets/images/promo/game_3.svg"
              title="Саванна"
              text={
                'Практикуемся в понимание английской речи и быстром ' +
                'переводе слов, не забываем про выученные слова. '
              }
            />

            <GameCard
              src="./assets/images/promo/game_6.svg"
              title="Мемори"
              text={
                'Запоминаем значение слов и учимся качественно ' +
                'формулировать свои мысли на английском.'
              }
            />
          </div>
          <div id="method" />
          <h2 className="promo_title_mid">Метод интервальных повторений</h2>
          <div className="text_after_title">
            Метод интервальных повторений поможет надолго запомнить новый
            материал. Преимущество метода заключается в том, что информацию,
            которую мы запоминаем, необходимо со временем повторять, но ни
            каждый день, ни через год, а через определенные, увеличивающиеся со
            временем интервалы.
          </div>
          <img
            className="full_width"
            src="./assets/images/promo/graph.svg"
            alt="green graph waved"
            width="100px"
          />
          <div className="text_after_title">
            Всё что Вам нужно - это лишь регулярно тренироваться. Программное
            обеспечение на основе метода интервальных повторений всё сделает за
            вас. При необходимости продолжительность интервалов можно
            регулировать в настройках.
          </div>
          <IntervalInfo />
          <Study />
        </div>
      </Container>
      <Footer />
    </PromoWrapper>
  )
}
