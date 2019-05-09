import axios from 'axios';

export default axios.create({
	baseURL : 'https://api.unsplash.com',
	headers:{
			Authorization:
			'Client-ID bfc06d7c634b0fe4cae03ad01823be7de4422852cab10df1c61f31c97d122292'
		}
});