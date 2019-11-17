import React from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Books Search</h1>
        </header>
        <SearchForm />
      </div>
    );
  }
}

export default App;
