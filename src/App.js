import React from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import ControlBar from './ControlBar/ControlBar';
import ResultsList from './ResultsList/ResultsList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  updateBooks = (newBooks) => {
    this.setState({
      books: newBooks,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Books Search</h1>
        </header>
        <SearchForm updateBooks={this.updateBooks} />
        <ControlBar />
        <ResultsList books={this.state.books} />
      </div>
    );
  }
}

export default App;
