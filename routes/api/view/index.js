const view = require('express').Router();
const Database=require("./../../../dbAdapter");
const Joi=require("joi");

const views = [{
	key:"backofficeView",
	title:"Jumia One",
	type:"view",
	sections:[
		{
			key:"owner",
			title:"Backoffice owner",
			type:"singleItemSection",
			config:{
				entityType:"owners",
				query:"",
				attributes:["name"],
				actions:[{
					type:"open"
				}
				]
			}	
		}
	]
}
]

view.get('/:key',(req,res)=> {
	let view = views.find(c => c.key === req.params.key)
	res.send(view);
});

module.exports = view;