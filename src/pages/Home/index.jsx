import React from 'react';
import { Card } from '../../components/Card';

import { data } from '../../constants/data';

import './styles.scss';

export const Home = () => {
  return (
    <main className='home'>
      <div className='home__container'>
        <h1>Álbuns</h1>

        <div className='home__card-list'>
          {data.map((item, index) => (
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
