
class dbAdapter {

	constructor(){
		this.db = [
			{
			key:"owners",
			instances:[
				{
				id:1,
				attributes:{
				name:"Giovanni"}
				}
			]
	}
]

	}




getDB(){
	return this.db;
}

createCollection(key,schema){
	this.db.push({
		key:key,
		instances:[]
	})
}

getCollection(key){
	return this.db.find(c => c.key === key)
}

create(key, attributes){
	const {instances} = this.getCollection(key)
	const instance = {
	id: instances.length +1,
	attributes: attributes
	}
	instances.push(instance)
	return instance
}

update(key, id, attributes){
	let {instances} = this.db.find(c => c.key === key) || {}
	if(!instances) return undefined
	let instance = instances.find(c => c.id === id)
	if(!instance) return undefined
	instance.attributes = attributes
	return instance
}

get(key, id){
	let {instances} = this.db.find(c => c.key === key) || {}
	if(!instances) return undefined
	let instance = instances.find(c => c.id === id)
	if(!instance) return undefined
	return instance
}

query(key,query){
	let {instances} = this.db.find(c => c.key === key) || {}
	return instances || []
}

delete(key, id){
	let {instances} = this.db.find(c => c.key === key) || {}
	if(!instances) return undefined
	let instance = instances.find(c => c.id === id)
	if(!instance) return undefined
	const index=instances.indexOf(instance)
	instances.splice(index,1);
	return instance
}

}
module.exports=dbAdapter;
