import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.zipCode.value
        }
    }

    onInputChange(e) {
        this.setState({inputValue: e.target.value});
    }

    render() {
        return (
            <div className="search-box">
                <ZipCodeField zipCode={this.state.inputValue} onInputChange={this.onInputChange.bind(this)} />
                <Button isDisabled={!this.state.inputValue} />
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

const Button = props => <button className="button" disabled={props.isDisabled} >Search</button>

export default Search;