import React from 'react';
import './Result.css';

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        image: "",
        book_title: "Lord of the Rings",
        authors: [],
        price: "$30.00",
        description: "The best book ever written, other than the Bible"
    }
    
    render() {
        //authors is an array
        let authors = this.props.authors.join(" & ");
        
        return (
            <div className="result">
                <div className="image-container">
                    <img className="book-image" src={this.props.image} />
                </div>
                <div className="info-container">
                    <h2 className="book-title">{this.props.title}</h2>
                    <p className="book-author">{authors}</p>
                    <p className="book-price">{this.props.price}</p>
                    <p className="book-description">{this.props.description}</p>
                </div> 
            </div>
        )
    }
}

export default Result;