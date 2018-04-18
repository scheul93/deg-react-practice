import React, {
	Component
} from 'react';
import Search from './components/Search/Search';
import DistanceFilter from './components/DistanceFilter/DistanceFilter';
import GenderFilter from './components/GenderFilter/GenderFilter';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			zipCode: {
				value: ""
			},
			distance: {
				value: "5"
			},
			gender: {
				value: []
			}
		}
	}

	onGenderChange(e) {
		if (e.target.checked) {
			this.setState({
				gender: {
					value: [e.target.value, ...this.state.gender.value]
				}
			})
		} else {
			const newVal = this.state.gender.value.filter(item => item !== e.target.value);
			this.setState({
				gender: {
					value: newVal
				}
			})
		}
	}

	onZipCodeChange(zipCode) {
		this.setState({
			zipCode: {
				value: zipCode
			}
		})
	}

	onDistanceChange(e) {
		console.log("distance changing");
		this.setState({
			distance: {
				value: e.target.value
			}
		})
	}

	render() {
		return ( 
			<div className="App" >
				<header className="App-header" >
					<h1 className="App-title" > HEADER </h1> 
				</header>
				<Search zipCode={this.state.zipCode} onSearch={this.onZipCodeChange.bind(this)} />
				<div className="columns">
					<div className="column--secondary">
						<DistanceFilter distance={this.state.distance} zipCode={this.state.zipCode.value} onDistanceChange={this.onDistanceChange.bind(this)} />
						<GenderFilter onGenderChange={this.onGenderChange.bind(this)}/>
					</div>
					<div className="column--primary">
						Results
					</div>
				</div>
				
			</div>
		);
	}
}

export default App;
