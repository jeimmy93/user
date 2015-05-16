
// traer todos los usuarios y mostrar un usuario
var express = 	require("express"),
	app		= 	express()
	puerto 	= 	process.env.PORT || 8081, 
	bodyParser 	= require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var user = [
				{
					id_user 	: 	1, 
					nombre  	: 	"jeimmy",
					apellido 	: 	"castañeda", 
					foto    	: 	"", 
					
					
				},
				{
					id_user 	: 	2, 
					nombre  	: 	"javier",
					apellido 	: 	"sanchez", 
					foto    	: 	"", 
					
				},
				{
		         	id_user 	: 	3, 
					nombre  	: 	"liliana",
					apellido 	: 	"ramirez", 
					foto    	: 	"",


				}];

app.get('/getAllData', function(req, res)
{
	res.json(user);   
});

app.get('/getData/:id_user', function(req, res)
{
	var ind = buscarIDUser(req.param("id_user"));
	var devuelve = {datos : ind >= 0 ? user[ind] : "", status : ind >= 0 ? true : false};
	res.json(devuelve);
});

var buscarIDUser = function(id_user)
{
	var ind = -1;
	for(var i = 0; i < user.length; i++)
	{
		if(Number(user[i].id_user) === Number(id_user))
		{
			ind = i;
			break;
		}
	}
	return ind;
};

app.listen(puerto);
console.log("Express server iniciado en el " + puerto);



