var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var response = {};

//10 employees loaded on page load
var employee = [{
		id: 1,
		firstName: 'Sanjai',
		lastName: 'kumar',
		email: 'sanjaikumars@hcl.com',
		position: 'Consultant'
	},{
		id: 2,
		firstName: 'Suresh',
		lastName: 'kumar',
		email: 'sureshkumars@hcl.com',
		position: 'Associate-Consultant'
	},{
		id: 3,
		firstName: 'Mahesh',
		lastName: 'jeyagopal',
		email: 'maheshjeyagopal@hcl.com',
		position: 'Senior-Consultant'
	},{
		id: 4,
		firstName: 'Rajesh',
		lastName: 'kumar',
		email: 'rajeshjekumar@hcl.com',
		position: 'Senior-Consultant'
	},{
		id: 5,
		firstName: 'Anitha',
		lastName: 'jeyagopal',
		email: 'anithajeyagopal@hcl.com',
		position: 'Consultant'
	},{
		id: 6,
		firstName: 'Deepika',
		lastName: 'gayathri',
		email: 'deepikagayathri@hcl.com',
		position: 'Senior-Consultant'
	},{
		id: 7,
		firstName: 'Sathish',
		lastName: 'kumar',
		email: 'sathishkumar@hcl.com',
		position: 'Tech-Lead'
	},{
		id: 8,
		firstName: 'Srini',
		lastName: 'vasan',
		email: 'srinivasan@hcl.com',
		position: 'Architech'
	},{
		id: 9,
		firstName: 'Ritesh',
		lastName: 'sagar',
		email: 'riteshsagar@hcl.com',
		position: 'Associate-Consultant'
	},{
		id: 10,
		firstName: 'Rajesh',
		lastName: 'jeyagopal',
		email: 'rajeshjeyagopal@hcl.com',
		position: 'Consultant'
	}];
	
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));


/**
 * ToDoList
 */
app.get('/todolist', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    response = {};
	res.send({ data : employee });
});

/**
 * Login
 */
app.post('/login', function (req, res) {
	response = req.body;
	console.log('responseresponseresponseresponseresponse' +response);
	console.log('responseresponseresponseresponseresponse' +response.userName);
	console.log('responseresponseresponseresponseresponse' +response.password);
	res.send({ message : 'success' });
});


app.listen(PORT, function () {
  console.log('Server listening on '+PORT);
});