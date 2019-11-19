import React from 'react';
import './ControlBar.css';

class ControlBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: this.props.filters,
            price: 0,
        }        
    }

    onPDChange = () => {
        let currentFilters = this.state.filters;
        currentFilters.req_publicDomain = !currentFilters.req_publicDomain
        this.setState({
            filters: currentFilters
        });
        this.props.updateFilters(this.state.filters);
    }

    onEpubChange = () => {
        let currentFilters = this.state.filters;
        currentFilters.req_epub = !currentFilters.req_epub
        this.setState({
            filters: currentFilters
        });
        this.props.updateFilters(this.state.filters);
    }
    
    onPDFChange = () => {
        let currentFilters = this.state.filters;
        currentFilters.req_pdf = !currentFilters.req_pdf
        this.setState({
            filters: currentFilters
        });
        this.props.updateFilters(this.state.filters);
    }

    onPriceChange = (e) => {
        let currentFilters = this.state.filters;
        currentFilters.max_price = e.target.value;
        this.setState({
            filters: currentFilters
        });
        this.props.updateFilters(this.state.filters);
    }

    render() {
        return (
            <div className="control-bar-container">
                <label htmlFor="public-domain-selector">Public Domain: </label>
                <input type="checkbox" name="public-domain-selector" value={this.state.filters.req_publicDomain} onChange={this.onPDChange} />
                {/* <select className="print-type-selector" name="public-domain-selector">
                    <option value="print" key="1">All</option>
                </select> */}
                
                <label htmlFor="epub-selector">epub: </label>
                <input type="checkbox" name="epub-selector" value={this.state.filters.req_epub} onChange={this.onEpubChange} />

                <label htmlFor="pdf-selector">pdf: </label>
                <input type="checkbox" name="pdf-selector" value={this.state.filters.req_pdf} onChange={this.onPDFChange} />

                <label htmlFor="price-selector">Max price: </label>
                <input type="number" name="price-selector" value={this.state.filters.max_price} onChange={e => this.onPriceChange(e)} />

                {/* <label htmlFor="book-type-selector">Book Type: </label>
                <select className="book-type-selector" name="book-type-selector">
                    <option value="No Filter" key="1">No Filter</option>
                    <option value="e-Book" key="2">e-Book</option>
                </select> */}
            </div>
        )
    }
}

export default ControlBar;