import React from 'react';

import Searcher from '../Search';
import Logo from '../../Assets/logo.png';
import './styles.scss';

const Header = () => (
  <header className='walmart-header'>
    <div className='walmart-header__logo'>
      <img src={Logo} alt="walmart logo" />
    </div>
    <Searcher />
  </header>
);

export default Header;
