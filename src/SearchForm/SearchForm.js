import React from 'react';
import './SearchForm.css'

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book_search: "",
            books: []
        }
    }
    
    userTyped(input) {
        this.setState({
            book_search: input,
        })
    }

    buildBooks(obj) {
        //do stuff
        console.log(obj);
        let books = obj.items.map(item => {
            let bookPrice = '';
            if (item.saleInfo.saleability === "NOT_FOR_SALE") {
                bookPrice = "Not for sale"
            } else {
                bookPrice = `$${item.saleInfo.retailPrice.amount}`;
            }
            return {
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                price: bookPrice,
                description: item.volumeInfo.description,
                image: item.volumeInfo.imageLinks["smallThumbnail"]
            }
        });
        console.log(books);
        this.props.updateBooks(books);
        //return books;
    }

    handleSubmit(e) {
        e.preventDefault();
        const bookToSearch = this.state.book_search.replace(/ /g, "+");
        const baseUrl = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyBTtn-V7onqctCynDtvzWrRjS_cKEzV5VE&q=";
        let url = baseUrl + bookToSearch;
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(`Something went wrong:`);
                } else {
                    return response;
                }
            })
            .then(response => response.json())
            .then(data => this.buildBooks(data))
            .catch(err => console.log(err.message));
    }

    render() {
        return(
            <form onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="book">Search: </label>
                <input 
                    type="text" 
                    value={this.state.book_search} 
                    name="book" 
                    onChange={e => this.userTyped(e.target.value)}
                    placeholder="Lord of the Rings"
                    />
                <button type="submit">Search books</button>
            </form>
        )
    }
}

export default SearchForm;