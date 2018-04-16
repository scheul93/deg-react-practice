import React, { Component } from 'react';
import './DistanceFilter.css';

class DistanceFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.distance.value
        }
    }

    onInputChange(e) {
        this.setState({inputValue: e.target.value});
    }

    render() {
        return (
            <div className="distance-filter">
                <ZipCodeField onInputChange={this.onInputChange.bind(this)} milesVal={this.state.inputValue} />
                <ZipCodeDescription milesVal={this.state.inputValue} zipCode={this.props.zipCode} />
            </div>
        )
    }
}

function ZipCodeField(props) {
    return (
        <div className="field">
            <label htmlFor="distance" className="label label--alt">Distance</label>
            <input className="input" 
                type="range" 
                name="distance" 
                id="distance" 
                list="tickmarks"
                min="5"
                max="30"
                step="5"
                onChange={props.onInputChange}
                value={props.milesVal}
            />
            <datalist id="tickmarks">
                <option value="5" label="5" />
                <option value="10" label="10" />
                <option value="15" label="15" />
                <option value="20" label="20" />
                <option value="25" label="25" />
                <option value="30" label="All" />
            </datalist>
        </div>
    )
}

function ZipCodeDescription(props) {
    return (
        <div className="distance__description">
            Current: {props.milesVal > 25 ? 'All' : props.milesVal} Miles from {props.zipCode || '66211'}
        </div>
    )
}

export default DistanceFilter;