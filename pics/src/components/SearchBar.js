import React from 'react';

class SearchBar extends React.Component{
	state = {term:''};

	onFormSubmit=(event)=>{
		event.preventDefault();
		this.props.onSubmit(this.state.term);
		console.log(this.state.term);
	}
	onIputChange(event){
		console.log(event.target.value);
	}
	onInputClick(event){
		console.log('input was clicked')
	}
	render(){
		//event => this.onFormSubmit(event)
		return <div className="ui segment">
			<form className="ui form" onSubmit={this.onFormSubmit}>
				<div className="field">
				<label>Image Search</label>
				<input type="text"
				value={this.state.term}
				 onChange={e => this.setState({term:e.target.value})}
				 onClick={this.onInputClick}
				 
				 />
				</div>
			</form>
		</div>
	}
}
export default SearchBar;