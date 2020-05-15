{
	"name": "svysignature-pad",
	"displayName": "Pad",
	"version": 1,
	"categoryName": "Media",
	"icon": "svysignature/pad/icon.png",
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
		},
		
		"dotSize" : {"type":"float"},
		"minWidth" : {"type":"float"},
		"maxWidth" : {"type":"float"},
		"throttle" : {"type":"number"},
		"minDistance" : {"type":"number"},
		"backgroundColor" : {"type":"color"},
		"penColor" : {"type":"color"},
		"velocityFilterWeight" : {"type":"float"}
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