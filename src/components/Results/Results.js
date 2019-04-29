import React, {Component} from 'react';
import searchService from '../services/searchService';

class Results extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log(searchService.search(this.props))
        return (
            <div>Results</div>
    )}
}

export default Results;