import React from 'react';
import Result from './Result/Result';

class ResultsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: this.props.filters,
            books: this.props.books,
            filteredBooks: [],
        }
    }
    
    static defaultProps = {
        books: []
    }

    render() {
        console.log(`Results List render ran!`);
        const results = this.props.books.map((book, index) => {
            return (
            <Result 
                key={index}
                image={book.image} 
                title={book.title} 
                authors={book.authors} 
                price={book.price}
                description={book.description}
                isEpub={book.epub}
                isPDF={book.pdf}
                isPublicDomain={book.publicDomain}
            />
            )
        });
        
        const filteredResults = results.filter(result => {
            if(this.state.filters.req_epub === true && result.props.isEpub === false) {
                return false;
            } else if (this.state.filters.req_pdf === true && result.props.isPDF === false) {
                return false;
            } else if (this.state.filters.req_publicDomain === true && result.props.isPublicDomain === false) {
                return false;
            } else if (this.state.filters.max_price <= result.props.isPublicDomain) {
                return false;
            } else {
                return true;
            }
        })

        return (
            <div className="results-container">
                {filteredResults}
            </div>
        )
    }
}

export default ResultsList;
