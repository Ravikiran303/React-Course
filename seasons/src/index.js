import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import UseLocation from './UseLocation';

 const App = () =>{

	const [lat, errorMessage] = UseLocation();
	
	let content;
	if(errorMessage){
		content = <div>Error: {errorMessage} </div>
	}
	else if(lat){
		content = <SeasonDisplay lat={lat} />;
	}
	else{
		content = <Spinner message="Please accept location request.."/>;
	}
	return(
		<div className = "border red">{content}</div>
	);
};

// // class App extends React.Component{
// // 		constructor(props){
// // 			super(props);

// // 			this.state = {lat:null, errorMessage: ''};
			
// // 			window.navigator.geolocation.getCurrentPosition(
// // 			(position) =>{
// // 				console.log(position);
// // 				this.setState({lat:position.coords.latitude});
// // 			},
// // 			(err) => {
// // 			console.log(err);
// // 			this.setState({errorMessage:err.message});
// // 			}
// // 		);

// // 		}
// // 	//state = {lat:null, errorMessage: ''};
// // 	ComponentDidMount(){
// // 		//console.log("My Component was rendered to the screen");
	
// // 	}

// // 	renderContent(){
// // 		if (this.state.errorMessage && !this.state.lat) {
// // 			return <div>Error:{this.state.errorMessage}</div>;
// // 		}
// // 		if (!this.state.errorMessage && this.state.lat) {
			
// // 			return <SeasonDisplay lat={this.state.lat}/>
// // 		}
// // 		return <Spinner message="Please accept location request.."/>;
// // 	}
	
// // 	render(){
// // 		// return (
// // 		// <div>Latitude ::{this.state.lat}
// // 		// <br/>
// // 		// Error :: {this.state.errorMessage}</div>
// // 		// );
// // 		return(
// // 			<div className = "border red">{this.renderContent()}</div>
// // 		);
// // 	}
	
// }
ReactDOM.render(<App/>,document.querySelector('#root'));