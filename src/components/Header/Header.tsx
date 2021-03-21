import Btn from "../shared/Btn/Btn";
import Logo from '../../assets/images/rslang.svg';

import './header.scss';

const Header = () => (
  <header className="header">
    <a href="/"><img src={Logo} alt="logo" className="logo" /></a>
    <section className="header-buttons">
      <Btn type="filled">Войти</Btn>
      <Btn>Регистрация</Btn>
    </section>
  </header>
);

export default Header;
