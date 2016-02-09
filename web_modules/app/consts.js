const apiPath = 'https://api.spotify.com/v1/';

export default {
	api:{
		endpoints:{

			getSearch:(query, type) => {
				return apiPath+`search?query=${query}*&offset=0&limit=10&type=${type}`
			}
		}
	}
}