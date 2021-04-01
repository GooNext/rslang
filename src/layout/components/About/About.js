import React from 'react';
import Card from './Card';
import style from './About.module.css';
import Header from '../Promo/Header/Header';

const teamMembers = [
  {
    photo: './assets/images/Team/1.jpg',
    name: 'Викторий Литвиненко,',
    github: 'https://github.com/victorlitvinenko/',
    description: `Капитан галеры и опытный пират. 
    Разработал и поддерживал архитектуру приложения. 
    Создал страницы карточек, настроек, статистики и 
    словаря, настроил аутентификацию и роутинг.`,
    bgColor: '#DBF2EF',
    role: 'ведущий разработчик',
  },
  {
    photo: './assets/images/Team/2.jpg',
    name: 'Валерий Дроздович,',
    github: 'https://github.com/goonext/',
    description: `Боцман галеры и талисман команды. 
    Разработал дизайн приложения, 
    реализовал промостраницу, игру Savannah, несколько общих
    компонентов, помогал команде с версткой`,
    bgColor: '#F2F2F2',
    role: 'ведущий разработчик, дизайнер',
  },
  {
    photo: './assets/images/Team/3.jpg',
    name: 'Вячеславий Сенкевич,',
    github: 'https://github.com/skypneuma',
    description: `Начальник таможни и агент на 
    Ближнем Востоке. Занимался разработкой игры 
    Speakit, реализовал отправку статистики на 
    сервер и переключатель уровней в играх. Помогал
     команде с реализацией логики.`,
    bgColor: '#DBF2EF',
    role: 'разработчик',
  },
  {
    photo: './assets/images/Team/4.jpg',
    name: 'Владимирий Леонтьев,',
    github: 'https://github.com/vladimirleontev281',
    description: `МЕГАМОЗГ. Занимался разработкой 
    общих компонентов, версткой и логикой страниц. 
      Сделал игру Audiocall. Принимал участие в 
      разработке архитектуры проекта.`,
    bgColor: '#DBF2EF',
    role: 'разработчик',
  },
  {
    photo: './assets/images/Team/5.jpg',
    name: 'Игорий Иванюк,',
    github: 'https://github.com/cqxg/',
    description: `Директор по снабжению и наладчик 
    орудий. Придумал и разработал игру Memory. Реализовал функциональную часть 
      модальных окон.`,
    bgColor: '#F2F2F2',
    role: 'разработчик',
  },
  {
    photo: './assets/images/Team/6.jpg',
    name: 'Сергий Пожарицкий,',
    github: 'https://github.com/sergeytestweb/',
    description: 'Покупал шаурму и следил за порядком. Реализовал игру Sprint в соответствии с дизайном, сверстал страницу о команде и Footer.',
    bgColor: '#DBF2EF',
    role: 'разработчик',
  },
];

function About() {
  return (
    <>
      <Header />
      <div className={style.Wrapper}>
        <div className={style.AboutHeader}>
          <h2 className={style.AboutTitle}>Наша галера</h2>
          <p>Мы старались сделать проект весёлым и увлекательным!</p>
        </div>
        <div className={style.Main}>
          {teamMembers.map(({
            name, description, github, photo, color, role,
          }, id) => (
            <Card
              key={id}
              name={name}
              description={description}
              github={github}
              photo={photo}
              bgColor={color}
              role={role}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
