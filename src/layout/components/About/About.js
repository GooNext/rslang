import React from 'react';
import Card from './Card';
import style from './About.module.css';
import Header from '../Promo/Header/Header';

const teamMembers = [
  {
    photo: './assets/images/Team/2.jpg',
    name: 'Валерий Дроздович,',
    github: 'https://github.com/goonext/',
    description: `Капитан баркаса и талисман команды. 
    Разработал дизайн приложения, 
    реализовал промостраницу, игру Savannah, несколько общих
    компонентов, помогал команде с версткой. Прикрутил backend.`,
    bgColor: '#F2F2F2',
    role: 'ведущий разработчик, дизайнер',
  },
  {
    photo: './assets/images/Team/3.jpg',
    name: 'Вячеславий Сенькевич,',
    github: 'https://github.com/skypneuma',
    description: `Начальник таможни и агент на 
    Ближнем Востоке. Помогал
     команде с реализацией логики и параллельно искал нефть в пустыне.`,
    bgColor: '#DBF2EF',
    role: 'разработчик',
  },
  {
    photo: './assets/images/Team/6.jpg',
    name: 'Сергий Пожарицкий,',
    github: 'https://github.com/sergeytestweb/',
    description:
      'Покупал шаурму и следил за порядком. Реализовал игру Sprint в соответствии с дизайном, сверстал страницу о команде и Footer, а также наполнил приложение контентом.',
    bgColor: '#DBF2EF',
    role: 'разработчик',
  },
  {
    photo: './assets/images/Team/1.jpg',
    name: 'Викторий Литвиненко,',
    github: 'https://github.com/victorlitvinenko/',
    description: `Боцман баркаса и опытный пират. 
    Разработал и поддерживал архитектуру приложения. 
    Создал страницы карточек, настроек, статистики и 
    словаря, настроил аутентификацию и роутинг. Натёр мазоли на руках и вышел в порту на Волге. Обещал вернуться на курс ReactJS осенью.`,
    bgColor: '#DBF2EF',
    role: 'ведущий разработчик',
    style: { filter: 'blur(8px)' },
  },
  {
    photo: './assets/images/Team/4.jpg',
    name: 'Владимирий Леонтьев,',
    github: 'https://github.com/vladimirleontev281',
    description: `МЕГАМОЗГ. Занимался разработкой 
    общих компонентов, версткой и логикой страниц. 
    Сделал игру Audiocall. Принимал участие в 
    разработке архитектуры проекта. Натёр мазоли на руках ивышел в порту на Волге. Обещал вернуться на курс ReactJS осенью.`,
    bgColor: '#DBF2EF',
    role: 'разработчик',
    style: { filter: 'blur(8px)' },
  },
  {
    photo: './assets/images/Team/5.jpg',
    name: 'Игорий Иванюк,',
    github: 'https://github.com/cqxg/',
    description: `Директор по снабжению и наладчик 
    орудий. Придумал и разработал игру Memory. Реализовал функциональную часть 
    модальных окон. Натёр мазоли на руках и вышел в порту на Волге. Обещал вернуться на курс ReactJS осенью.`,
    bgColor: '#F2F2F2',
    role: 'разработчик',
    style: { filter: 'blur(8px)' },
  },
];

function About() {
  return (
    <>
      <Header />
      <div className={style.Wrapper}>
        <div className={style.AboutHeader}>
          <h2 className={style.AboutTitle}>Наш плавучий баркас</h2>
          <p>Мы старались сделать проект весёлым и увлекательным!</p>
        </div>
        <div className={style.Main}>
          {teamMembers.map(
            ({
              name, description, github, photo, color, role, style,
            }, id) => (
              <Card
                key={id}
                name={name}
                description={description}
                github={github}
                photo={photo}
                bgColor={color}
                role={role}
                style={style}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
}

export default About;
