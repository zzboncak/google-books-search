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
      filters: {
        max_price: 30.0,
        req_epub: false,
        req_pdf: false,
        req_publicDomain: false
      }
    }
  }

  updateBooks = (newBooks) => {
    this.setState({
      books: newBooks,
    });
    console.log(this.state);
  }

  updateFilters = (object) => {
    this.setState({
      filters: object
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Books Search</h1>
        </header>
        <SearchForm updateBooks={this.updateBooks} />
        <ControlBar updateFilters={this.updateFilters} filters={this.state.filters}/>
        <ResultsList books={this.state.books} filters={this.state.filters} />
      </div>
    );
  }
}

export default App;
