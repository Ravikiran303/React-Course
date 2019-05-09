import React from 'react';
import ReactDOM from 'react-dom';

function getText() {
	// body...
	return "click me Here..!"
}
const App = () =>{
	const button1 = "SubmitHere..!"
	const button2 = {text:'clik button'};
	return (

		<div>
		<label className="label" forname="name">Enter your Name :: </label>
		<input id="name" type="text"/>
		<button style={{backgroundColor:'blue',color:'white'}}>Submit</button>
		<button style={{backgroundColor:'blue',color:'white'}}>{button1}</button>
		<button style={{backgroundColor:'blue',color:'white'}}>{getText()}</button>
		<button style={{backgroundColor:'blue',color:'white'}}>{button2.text}</button>
		</div>
	);
};
ReactDOM.render(<App/>, document.querySelector('#root'));