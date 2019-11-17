import React from 'react';
import './Result.css';

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        image: "",
        book_title: "Lord of the Rings",
        author: "J. R. R. Tolkien",
        price: "$30.00",
        description: "The best book ever written, other than the Bible"
    }
    
    render() {
        return (
            <div className="result">
                <img className="book-image" src={this.props.image} />
                <h2 className="book-title">{this.props.title}</h2>
                <p className="book-author">{this.props.author}</p>
                <p className="book-price">{this.props.price}</p>
                <p className="book-description">{this.props.description}</p>
            </div>
        )
    }
}

export default Result;