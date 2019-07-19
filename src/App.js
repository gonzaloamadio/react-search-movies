import React from 'react';
import { Title } from './components/Title'
import SearchComponent from './components/SearchComponent'

import Detail from './pages/Detail'

import './App.css';
import 'bulma/css/bulma.css'

function App() {
  const url = new URL(document.location)
  const hasId = url.searchParams.has('id')
  if (hasId){
    return <Detail id={url.searchParams.get('id')}/>
  }

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
