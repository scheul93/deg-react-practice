import React, {Component} from 'react';

class GenderFilter extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="field">
                <label htmlFor="distance" className="label label--alt">Gender</label>
                <ul className="field-group">
                    <li className="field-group__list-item">
                        <input className="input input--checkbox" 
                            id="gender__female" 
                            name="gender" 
                            type="checkbox" 
                            value="female"
                            onChange={this.props.onGenderChange}
                        />
                        <label className="label label--inline" htmlFor="gender__female">Female</label>
                    </li>
                    <li className="field-group__list-item">
                        <input className="input input--checkbox" 
                            id="gender__male" 
                            name="gender" 
                            type="checkbox" 
                            value="male"
                            onChange={this.props.onGenderChange}
                        />
                        <label className="label label--inline" htmlFor="gender__male">Male</label>
                    </li>
                    <li className="field-group__list-item">
                        <input className="input input--checkbox" 
                            id="gender__other" 
                            name="gender" 
                            type="checkbox" 
                            value="other"
                            onChange={this.props.onGenderChange} 
                        />
                        <label className="label label--inline" htmlFor="gender__other">Other</label>
                    </li>
                </ul>
            </div>
    )}
}

export default GenderFilter;