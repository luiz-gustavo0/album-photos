import React from 'react';
import { Card } from '../../components/Card';

import { albums } from '../../constants/albums';

import './styles.scss';

export const Home = () => {
  return (
    <main className='home'>
      <div className='home__container'>
        <h1>Álbuns</h1>

        <div className='home__card-list'>
          {albums.map((item, index) => (
            <Card
              key={index}
              imgSrc={item.image}
              label={item.label}
              album={item.album}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
