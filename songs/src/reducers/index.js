import {combineReducers} from 'redux';
const songReducer = () =>{
	return [
		{title : 'No Scrubs',duration:'4:05'},
		{title : 'Macarena',duration:'2:30'},
		{title : 'Al Star',duration:'3:01'},
		{title : 'Bhaga Bhaga',duration:'4:45'},
		{title : 'I want it That Way',duration:'1:05'},

	];
};
const selectedSongReducer = (selectedSong = null,action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};
export default combineReducers({
	songs:songReducer,
	selectedSong:selectedSongReducer
});