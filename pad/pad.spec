{
	"name": "svysignature-pad",
	"displayName": "pad",
	"version": 1,
	"definition": "svysignature/pad/pad.js",
	"libraries": 
	[
		{
			"name": "signature_pad.min.js",
			"version": "2.3.2",
			"url": "svysignature/pad/lib/signature_pad.min.js",
			"mimetype": "text/javascript"
		}
	],

	"model": 
	{
		"styleClass": 
		{
			"type": "styleclass",
			"tags": 
			{
				"scope": "design"
			},

			"default": "",
			"values": 
			[
			]
		}
	},

	"handlers": 
	{
		"onBegin": 
		{
			"parameters": 
			[
				
			]
		},

		"onEnd": 
		{
			"parameters": 
			[
				
			]
		}
	},

	"api": 
	{
		"init": 
		{
		"delayUntilFormLoads": true,
			"parameters": 
			[
				{
					"name": "options",
					"type": "object"
				}
			],
		},

		"getDataUrl": 
		{
			"parameters": 
			[
				{
					"name": "type",
					"type": "string"
				}
			],

			"returns": "string"
		},

		"setDataUrl": 
		{
			"parameters": 
			[
				{
					"name": "data",
					"type": "string"
				}
			],

			"returns": "boolean"
		},

		"clear": 
		{
			"returns": "boolean"
		}
	}
}