import React from 'react';
import CardMovieType from '../components/Cards/CardMovieType';


const AiringToday = () => {
  return (
    <main>
      <CardMovieType movieType="tv/airing_today" Title="Airing Today" />
    </main>
  );
};

export default AiringToday;