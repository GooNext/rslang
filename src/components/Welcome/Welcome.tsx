import Header from '../Header/Header';
import Img from '../../assets/images/welcome.jpg';

import './welcome.scss';

const Welcome = () => {
  return (
    <>
      <Header />
      <main>
        <div className="welcome-descr">
          <div className="title">Учите новые слова каждый день с RSlang</div>
          <p className="subtitle">
            Приложение для изучения иностранных слов с техникой интервального
            повторения, отслеживания индивидуального прогресса и мини-игр.
          </p>
          <p className="text-rules text-rules_title">Правила интервального повторения:</p>
          <p className="text-rules">— интервал обучения по умолчанию - 24 часа;</p>
          <p className="text-rules">— пользователь допустил ошибку или нажал кнопку повтора - 2 часа;</p>
          <p className="text-rules">— пользователь нажал кнопку 'хорошо' - 48 часов;</p>
          <p className="text-rules">— пользователь нажал кнопку 'легко' - 120 часов.</p>
        </div>
        <div><img src={Img} alt="img" style={{ maxWidth: '100%' }} /></div>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default Welcome;
