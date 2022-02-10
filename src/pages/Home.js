import React from 'react';
import '../css/Home.css'

function Home({child}) {
  return <div style={child} className='child bg'>
      <div className='intro'>
        <h1>Lydia Cho</h1>
        <h2 className='title'>Full-Stack Software Engineer</h2>
      </div>
  </div>;
}

export default Home;
