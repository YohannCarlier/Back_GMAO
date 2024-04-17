var credentials ={

	credentials: {
		client_id: 'N4prxaiz2GwFlFaiK1YeVcY0YTMxooAWdCmB1WiYR2dq894G',
		client_secret: 'XNZW7euCOkmDBQS0MmnBM4rjnr6NQvWmu9pwNYffVgzlrV8wGP9tg7dgiXwvZYpz',
		grant_type: 'client_credentials',
		scope: 'viewables:read',

	},
	
	//Autodesk Forge base url
	BaseUrl: 'https://developer.api.autodesk.com',
	Version: 'v1'
} ;

credentials.Authentication = credentials.BaseUrl + '/authentication/' + credentials.Version + '/authenticate'


module.exports = credentials;