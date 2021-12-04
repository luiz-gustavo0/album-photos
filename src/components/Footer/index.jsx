import React from 'react';

import linkedinIconImg from '../../img/linkedin.svg';
import githubIconImg from '../../img/github.svg';

import './styles.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__copy'>2021 &copy; - Luiz Gustavo Santos</p>

        <div className='social-links'>
          <a
            href='https://linkedin.com/in/luiz-gustavo0'
            target='_blank'
            rel='noreferrer'
            className='social-links__item'
          >
            <img src={linkedinIconImg} alt='Icone linkedin' />
          </a>
          <a
            href='https://github.com/luiz-gustavo0'
            target='_blank'
            rel='noreferrer'
            className='social-links__item'
          >
            <img src={githubIconImg} alt='Icone github' />
          </a>
        </div>
      </div>
      <p className='footer__atribuition'>
        Fotos fornecidas por{' '}
        <a href='https://pexels.com' target='_blank' rel='noreferrer'>
          pexels.com
        </a>
      </p>
    </footer>
  );
};
