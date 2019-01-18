[{
	key:"person",
	title:"Person",
	type:"entity",
	attributes:[
		{key:"name",
		title:"Name"
		type:"string",
		config:"",
		validations:[
			{
			type:"not-empty",
			value:""
			}
		]
		},
		{key:"surname",
		title:"Name"
		type:"string",
		config:"",
		validations:[
			{
			type:"not-empty",
			value:""
			}
		]
		},
		{key:"residentialCity",
		title:"City of Residence",
		type:"relation",
		config:{
			relatedEntity:"city"
		},
		validations:[
			{
			type:"not-empty",
			value:""
			}
		]
		}
	]
},
{
	key:"city",
	title:"City",
	type:"entity",
	attributes:[
		{key:"name",
		title:"Name",
		type:"string",
		config:"",
		validations:[
			{
			type:"not-empty",
			value:""
			}
		]
		}
	]	
},

{
	key:"cityView",
	title:"City",
	type:"view",
	config:{
			entity:"city",
			attributes:["name"]
		}
},
{
	key:"backofficeConfig",
	title:"Backoffice Configutation",
	type:"entity",
	attributes:[
		{key:"name",
		title:"Name",
		type:"string",
		config:"",
		validations:[
			{
			type:"not-empty",
			value:""
			}
		]
		}
	]	
},
{
	key:"backofficeConfigView",
	title:"Backoffice",
	type:"view",
	config:{
			entity:"backofficeConfig",
			attributes:["name"]
		}
},
{
	key:"contactInfo",
	type:"entity",
	attributes:[
		{key:"phone",
		title:"Phone"
		type:"number",
		config:"",
		validations:[
			{
			type:"not-empty",
			value:""
			}
		]
		},
		{key:"fax",
		title:"Fax"
		type:"string",
		config:"",
		validations:[
			{
			type:"not-empty",
			value:""
			}
		]
		},
		{key:"owner",
		title:"Contact Info Owner",
		type:"relation",
		config:{
			relatedEntity:"person"
		},
		validations:[
			{
			type:"not-empty",
			value:""
			}
		]
		}
	]
},
{
	key:"personView",
	title:"Person",
	type:"view",
	config:{
			entity:"person",
			attributes:["name","surname"]
		}
	sections:[
		{
			key:"contactSection",
			title:"Contact Info",
			type:"relatedEntity"
			config:{
				relation:"personContact"
				viewRelated:"child"
				sectionType:"one"
				view:"contactInfoView"
			}
		},
		{
			key:"childrenSection",
			title:"Children",
			type: "relatedEntity",
			config:{
				relation:"parentChild",
				viewRelated:"child",
				sectionType:"many",
				view:"personView"
			}
		}
	]
},
{
	key:"personContact",
	type:"relation",
	config:{
		parent:"person",
		child:"contactInfo"
	},
	validations:[]
},
{
	key:"parentChild",
	type:"relation",
	config:{
		parent:"person",
		child:"person"
	}
	,
	validations:[
		{type:"logicalExpression",
		value:"parent.id=!child.id"
		},
		{type:"logicalExpression",
		value:"parent.age>child.age"
		}
	]
},
{
	key:"contactInfoView",
	title:"Contact Info",
	type:"view",
	config:{
		entity:"contactInfo",
		attributes:["phone","fax"]
	}
},
{
	key:"backofficeContactInfo"
	type:"relation",
	attributes:[
		{key:"commonGene",
		title:"Gene in common"
		type:"string",
		config:"",
		validations:[
			{
			type:"not-empty",
			value:""
			}
		]
		}],
	config:{
		parent:"backoffice",
		child:"contactInfo"
	},
	validations:[]
},
{
	key:"backofficeView"
	title:"Jumia One",
	type:"view",
	sections:[
		{
			key:"people",
			title:"People",
			type:"entity"
			config:{
				sectionType:"many"
				view:"personView"
			}
		},
		{
			key:"cities",
			title:"Cities",
			type:"entity"
			config:{
				sectionType:"many",
				view:"cityView"
			}
		},
		{
			key:"Config",
			title:"Backoffice config",
			type:"entity"
			config:{
				sectionType:"one",
				view:"backofficeConfigView"
			}	
		}
	]
}
]


entity -> form page, fields and entity validations
view -> rows, cards, collection page headers, collection page content. if a view has no sections open directly the form page
relation -> defines relation between two entities (many to many)

section types:
 - entity: show all entities of that type
 - relatedEntity: show all entities related to the parent entity (parent entity can either be a parent or child in the relation)

 sections configs:
  - one/many depending if list or card
  - many comes with filters / sorting /search /download etc.

API routes are given by the views and child views contained in the sections
sections allow to create, view, delete

view/backofficeView/1 list of tabs
view/backofficeView/1/section/people/ personView list
view/personView/12341 personView collection page if contains sections otherwise redirect to form page
entity/person/12341 view,update,delete person form page in either view or edit mode
entity/person???? list of people or create
view/personView/22342 children personView collection page
view/personView/22342/section/childrenSection list of children belonging to a person

:type/:key/:id



section: card or a list always show the summary from a view of an entity or from a related entity
entity: form create/view/edit/delete
relation: connects 2 entities 
view: is a collection page


entities and relations


API routing -> entity validation logic -> DB logic

one entity can have Joi fields, but now needs to have relations
expand Joi to validate relations: existance of related entity?
current system does not allow to desbribe fields. Check if schema is pure validation or can describe.
without description, I cannot title fields, I cannot say if it is a relation or a field, for relations
if pure validation, then I may have a more complex schema that I can strip down for validations with Joy

entity:
key:owners
title:Owners
fields: [{
	key:name,
	title:Name,
	type:field,
	validation:Joi.string()
}
]

and it then becomes:

schema:{
	fields[0].key:fields[0].validation
}

or

schema:{
	name:Joi.string()
}

