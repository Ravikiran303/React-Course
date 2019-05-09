import React from 'react';
 class SearchBar extends React.Component{
 	state = {term:''};
 	onInputChange=(event)=>{
 		console.log(this.event);
 		this.setState({term:event.target.value});
 	}; 
 	onFormSubmit = (event) =>{
 		event.preventDefault();
 		//TODO:make sure we call
 		//callback from parent component
 		this.props.onFormSubmit(this.state.term);
 	}
 	render(){
 		return (
 		<div className="ui segment">
 			<form className="ui form" onSubmit={this.onFormSubmit}>
 				<div className="field">
 					<label>Video Seach</label>
 					<input type="text" 
 					onChange={this.onInputChange}
 					value={this.state.term}/>
 				</div>
 			</form>
 		</div>);
 	}
 }
 export default SearchBar;