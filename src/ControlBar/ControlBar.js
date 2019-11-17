import React from 'react';
import './ControlBar.css';

class ControlBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: {},
        }        
    }
    
    render() {
        return (
            <div className="control-bar-container">
                <label htmlFor="print-type-selector">Print Type: </label>
                <select className="print-type-selector" name="print-type-selector">
                    <option value="print" key="1">All</option>
                </select>
                
                <label htmlFor="book-type-selector">Book Type: </label>
                <select className="book-type-selector" name="book-type-selector">
                    <option value="No Filter" key="1">No Filter</option>
                    <option value="e-Book" key="2">e-Book</option>
                </select>
            </div>
        )
    }
}

export default ControlBar;