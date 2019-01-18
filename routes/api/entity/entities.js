const Joi=require("joi");
const entityTypes = [
	{
	key:"owners",
	title:"Owner",
	type:"entity",
	schema:	{
		name: Joi.string().min(3).required()
	}
},
	{
	key:"founders",
	title:"Founder",
	type:"entity",
	schema:	{
		name: Joi.string().min(3).required(),
		surname: Joi.string().min(3).required()
	}
},
{
	key:"joses",
	title:"Joses",
	type:"entity",
	schema:	{
		name: Joi.string().min(3).required(),
		surname: Joi.string().min(3).required(),
		age: Joi.number().required()
	}
},
{
	key:"teixeras",
	title:"Joses",
	type:"entity",
	schema:	{
		name: Joi.string().min(3).required(),
		surname: Joi.string().min(3).required(),
		age: Joi.number().required()
	}
}
]


module.exports = entityTypes;