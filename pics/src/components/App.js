import React from 'react';
import ReactDOM from 'react-dom';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{
	state = {images:[]};
	onSearchSubmit = async (term) => {
		const resp = await unsplash.get('/search/photos',{
			params:{query:term}
		});console.log(resp.data.results);
		// (or)
		// .then((response) =>{
		// 	console.log(response.data.results);
		// });
		this.setState({images:resp.data.results});
		console.log(term);
	}
	render(){
	return (<div className="ui container" style={{marginTop:'10px'}}>
		<SearchBar onSubmit={this.onSearchSubmit}/>
		Found:({this.state.images.length} images);
		<ImageList images={this.state.images}/>
	</div>
	);
	}
};
export default App;