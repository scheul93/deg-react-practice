import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.zipCode
        }
    }

    onInputChange(e) {
        this.setState({inputValue: e.target.value});
    }

    onSearchBtnClicked() {
        this.props.onSearch(this.state.inputValue);
    }

    render() {
        return (
            <div className="search-box">
                <ZipCodeField zipCode={this.state.inputValue} onInputChange={this.onInputChange.bind(this)} />
                <Button isDisabled={!this.state.inputValue} onSearch={this.onSearchBtnClicked.bind(this)} />
            </div>
        )
    }
}

const ZipCodeField = props => {
    return (
        <div className="field">
            <label className="label" htmlFor="zipCode">Zip Code</label>
            <input className="input" name="zipCode" id="zipCode" pattern="[0-9]{5}" onChange={props.onInputChange} />
        </div>
    )
}

const Button = props => <button className="button" disabled={props.isDisabled} onClick={props.onSearch}>Search</button>

export default Search;