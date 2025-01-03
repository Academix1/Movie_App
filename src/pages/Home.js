import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
const select=useSelector(state=>state.movies.placeholder);
  return <h2>Home Page {select}</h2>;
}

export default Home;