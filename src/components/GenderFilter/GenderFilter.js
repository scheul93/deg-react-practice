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
                        <input className="input input--radio" 
                            id="gender__female" 
                            name="gender" 
                            type="radio" 
                            value="female"
                            onChange={this.props.onGenderChange}
                        />
                        <label className="label label--inline" htmlFor="gender__female">Female</label>
                    </li>
                    <li className="field-group__list-item">
                        <input className="input input--radio" 
                            id="gender__male" 
                            name="gender" 
                            type="radio" 
                            value="male"
                            onChange={this.props.onGenderChange}
                        />
                        <label className="label label--inline" htmlFor="gender__male">Male</label>
                    </li>
                    <li className="field-group__list-item">
                        <input className="input input--radio" 
                            id="gender__all" 
                            name="gender" 
                            type="radio" 
                            value="all"
                            onChange={this.props.onGenderChange} 
                        />
                        <label className="label label--inline" htmlFor="gender__all">No Preference</label>
                    </li>
                </ul>
            </div>
    )}
}

export default GenderFilter;