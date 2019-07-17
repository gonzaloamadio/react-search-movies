import React from 'react';
import { Title } from './components/Title'
import SearchComponent from './components/SearchComponent'

import './App.css';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <Title>Search Movies</Title>
      <div className='SearchForm-wrapper'>
      <SearchComponent />
      </div>
    </div>
  );
}

export default App;
