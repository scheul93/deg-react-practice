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
				value: 30
			},
			gender: {
				value: "all"
			}
		}
	}

	onDistanceChange(newDistanceVal) {
		this.setState({
			distance: {
				value: newDistanceVal
			}
		})
	}
	onGenderChange(e) {
		this.setState({
			gender: {
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
				<Search zipCode={this.state.zipCode}/> 
				<DistanceFilter distance={this.state.distance} onDistanceChange={this.onDistanceChange.bind(this)} />
				<GenderFilter onGenderChange={this.onGenderChange.bind(this)} currentGender={this.state.gender.value}/>
			</div>
		);
	}
}

export default App;
