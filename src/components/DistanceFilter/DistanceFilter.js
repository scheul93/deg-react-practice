import React, { Component } from 'react';
// import './DistanceFilter.css';

class DistanceFilter extends Component {

    constructor(props) {
        super(props);
    }

    onInputChange(e) {
        this.props.onDistanceChange(Number(e.target.value));
    }

    render() {
        return (
            <div>
                <DistanceField onInputChange={this.onInputChange.bind(this)} milesVal={this.props.distance.value} zipCode={this.props.zipCode}/> 
                <DistanceDescription milesVal={this.props.distance.value} zipCode={this.props.zipCode} />
            </div>
        )
    }
}

function DistanceField(props) {
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
                disabled={!props.zipCode}
            />
            <datalist id="tickmarks">
                <option value="5" label="5" />
                <option value="10" label="10" />
                <option value="15" label="15" />
                <option value="20" label="20" />
                <option value="25" label="25" />
                <option value="" label="All" />
            </datalist>
        </div>
    )
}

function DistanceDescription(props) {
    return (
        <div className="distance__description">
            Current: {props.milesVal ? props.milesVal : 'All'} Miles from {props.zipCode}
        </div>
    )
}

export default DistanceFilter;