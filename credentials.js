var credentials ={

	credentials: {
		client_id: 'NDGorIc4rEVdSdCT14nAXUO2zZPKskB2nuD5baimnYlAqYj1',
		client_secret: 'Aip6twwDpeGt0SDyOaFox7jVAXPu9PAAwLm6JDvw1ijQrbQ2v4hbDVG9AKU8qLU6',
		grant_type: 'client_credentials',
		scope: 'viewables:read',

	},
	
	//Autodesk Forge base url
	BaseUrl: 'https://developer.api.autodesk.com',
	Version: 'v1'
} ;

credentials.Authentication = credentials.BaseUrl + '/authentication/' + credentials.Version + '/authenticate'


module.exports = credentials;