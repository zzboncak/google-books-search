import React from 'react';
import Result from './Result/Result';

class ResultsList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    static defaultProps = {
        books: []
    }

    render() {
        const results = this.props.books.map((book, index) => {
            return (
            <Result 
                key={index}
                image={book.image} 
                title={book.title} 
                author={book.author} 
                price={book.price}
                description={book.description} 
            />
            )
        })

        return (
            <div className="results-container">
                {results}
            </div>
        )
    }
}

export default ResultsList;
