const entityConfig = require('express').Router();
const Database=require("./../../../dbAdapter");
const Joi=require("joi");
const entityTypes = require("./entities")


entityConfig.get('/',(req,res)=> {
	console.log(entityTypes)
	res.send("schema here");
});

/*
function getEntiesConfig(){
	return entityTypes.map((a,c)=>{ //I need to Joi.describe the schema instead of returning it
		a.schema=Joi.describe(a.schema)
	}
	}

entity.all('/:key*',(req,res,next)=> {
	const key = req.params.key
	let entityType = getEntityType(key)
	if(!entityType) return res.status(404).send(`The entity type "${key}" was not found. ALL`)
	next()
});

entity.get('/:key/schema',(req,res)=> {
	const key = req.params.key
	let entityType = getEntityType(key)
	res.send(Joi.describe(entityType.schema));
});

entity.get('/:key/:id',(req,res)=> {
	//we should validate that the key exist in the entityTypes
	const key= req.params.key
	const id= parseInt(req.params.id)
	let instance=db.get(key,id)
	if(!instance) return res.status(404).send("The instance was not found")
	res.send(instance);
});

entity.get('/:key',(req,res)=> {
	const key=req.params.key
	res.send(db.query(key,req.query));
});

entity.post('/:key', (req,res)=>{
	const key= req.params.key;
	const {error} =validateInstanceAttributes(key,req.body);
	if(error)return res.status(400).send(error.details[0].message)
	const collection=db.getCollection(key)
	if(!collection){
		db.createCollection(key,getEntityType(key).schema)
	}
	res.send(db.create(key,req.body ));
})

entity.put('/:key/:id', (req,res)=>{
	const key= req.params.key;
	const id=parseInt(req.params.id)
	const {error} =validateInstanceAttributes(key,req.body);
	if(error)return res.status(400).send(error.details[0].message)
	let instance = db.update(key,id,req.body)
	if(!instance) return res.status(404).send("The instance was not found")
	res.send(instance);
})

entity.delete('/:key/:id', (req,res)=>{
	const key= req.params.key;
	const id= parseInt(req.params.id)
	let instance = db.delete(key, id)
	if(!instance) return res.status(404).send("The instance was not found")
	res.send(instance)
})

function getEntityType(key){
	return entityTypes.find(c => c.key === key)

}

function validateInstanceAttributes(key,attributes){
	const {schema} = entityTypes.find(c => c.key === key)
	return Joi.validate(attributes,schema)
}
*/

module.exports = entityConfig;