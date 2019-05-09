import axios from 'axios';

const KEY = "AIzaSyA2LwtGNbAcHqA6Hf6CocrI3SlHNgZIPU4";

export default axios.create({
	baseURL:'https://www.googleapis.com/youtube/v3',
	params:{
		part:'snippet',
		maxResults:5,
		key:KEY
	}
});