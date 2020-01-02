NODE IS JS RUNTIME ENVIRONMENT CAN ONLY RUN OUR JS  FILES


module is set of cides developer by a single developer or developers.

NODE PACKAGE MANGER IS FULL FORM

it is he most important part of the node js

a community that manages all modules is NPM organisation.
it has all the responsibility of everything related to the node js


npmjs.org its just the collection of the modules


one such module is the express 

we will down laod the fiels from the site whic are required by our work

 it is a reliable module 

we run node when we want  to call the  server


node filename===to execute the file needed to run

we use NPM to isntall our modules

we can also start our server with npm

module can be installed by   ====npm  modulename  eg-express


npm install modulename eg-express


SIGN UP form is the most relevant example of using nodejs





3 PARAMETERS IN NODE

REQUEST

RESPONSE

NEXT



FIRST OPEN THE command prompt and enter the cd inside the node folder 

npm helps us to integrate the modules into the node projects




there are two ways to input data into signup form :-

1st using coding to do all the stuff

2nd using modules to make the work a lot easier



we will use the modules which is only possible with the help of the npm


npm init TO INITIALIZE THE PROJECT
 
 it will create the json file in the directory

first enter the package name


enter the number version number

description

entry point 
test command

git repository

license

and then enter yes to continue


a file will appear on folder name json



if express  not installed then it error will come express not installed


require is used to aquire something

http is a module

its with its own path no need to give path

it is actually coming from the folder in our c directory



ALL MODULES ARE PRESENT INSIDE THE node_module folder



the http is actually a module present in the system





funciton parameter is called callback

200 means connection is ok
response.write head means header will load when any info is given


by default port will be 3000

we can give any port number


65535 is max port

express is the framework which can built the http connection


run the file server.js in command prompt
 using ====node server.js======

 then run the app.js

 error will come that express is not installed


npm install --save express

will install express
4.16.4 is the latest version

will also create a folder named node_modules inside the NODE folder

install express by the npmjs site 


npm install -g express

now write node app.js it will run now

open in browser 127.0.0.1:3000

hello world will print now

ctrl+c will close the sever


-g means globally install

mkdir == makes a new directory

ls creates a list of all files


npm install -g express

express generator is a module capable to start the node
 

express --hbs

have to install generator to get the above command working

hbs


--help and -h


we will use the engine named

sudo not to be used for the windows

for ubuntu add sudo before command
1st command

npm install express- generator -g

express --hbs |||||||||viewengine   known as handlebar

viewengine --hbs

handlebar




127.0.0.1:3000

we will use swig viewengine coz it render html files

rendering is moving from one page to another after clicking the link

swig engine renders html page


few view engines are ejs,pug,handlebar,hogan.js etc.


npm install   for all the required modules 

npm install will only install if JSON file is in the requied path or folder

(1)npm install - g express-generator

(2) express --hbs

(3) npm install

(4)npm start

added packages appear under the dependencies in the PACKAGE.JSON FILE

when the json file runs it will show the names of all packages

THE  MOST IMPORTANT FILE IS THE PACKAGE.JSON WE NEED NOT TO DELETE THE FILES

express -h for the help commands of the viewengine

PUTTING PROJECT ON NODE

(1) npm install express-generator -g

(2)express --hbs

(3)npm install

(4)npm start
	


app.js is entry point



now we replace the hbs part with the swig part



this is the code for that

var swig = require('swig');
app.engine('html',swig.renderFile);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');




 
PUT html files in views folder

delete files in views folder



STYLING,IMAGES AND OTHER FILES I N PUBLIC FOLDER

delete files in public folder


ROUTING -to connect many pages 

index.js prinmary file


get is used to display the webpage

entry point of page will be app.js
we just have to deifne the path in routes index.js

app.use the first file to be found

add more things in the index.js file


changing the pages with the removing     name.html    to           / name

changing the path with

if we want to use user.js then do the same with /users/name


4TH sem


create a command on folder on desktop

express framework is used in node

express-generator -g should be installed for the express(this is for one time only) 

under c program files, node_modules folder it is installed


express --hbs STOCK-PHOTOGRAPHY (LAST ONE IS THE NAME OF THE PROJECT)

CD folder name

local host:3000

changing code in node project 
open the file www under bin folder

on line 15,change the port number


public folder respnsibe for the images,js files and csss files

views folder responsible for the webpages html files

then install npm install swig
this will install swig engine




ROUTING IS IN THE INDEX.JS FOLDER




// NODE MAILER 

for displaying data to the user

1st-making a panel for that and the data enterred will go to the user. 	

module used for that is called  nodemailer

taking input from the user

using the form

diff types of input can work
name,email etc

name="email"
name="name"

this decides which kind of value will  be sent to the database.

enquiry.html should contain the info about the information


 |||||||||||||||||    response.render for going to page to page after a login or sign ||||||||||||||||
 |||||||||||||||||    response.send is for login but without changing the page.

 if printing in a console    => |||||||||||| console.render   ||||||||||||||||||||

 the email data submitted goes to the database.

THE NODEMAILER CODE WILL BE FOUND IN npmjs.org

the name should be same in the routes index.js folder

const nodemailer = require('nodemailer');

router.post('/enquiry' , (req,res) => {
	const output = 
	<p>you have a new enquiry</p>
	<h3>enquiry details</h3>
	<ul>

}

we should define the mail server to send the emails
for eg-smtp.zoho.com

port also should be specfied eg- 587

auth:{
	user:"sampleid@smail.com"
	pass:"qwerty"
}

` sign is used for the entering the info of the body and divs.

res.send(`)

	
npm install nodemailer

to install the nodemailer module


zoho mail is a free hosting service for the emails


the api designs the mail to be sent to the user.

contact.html

zoho mail is one such free service


use smtp mail server




creating id under zoho mail.com

id-chikoo1998@zoho.com



router.post/('enquiry' , (req,res) => {

});



form action is important




put nodemialer code under index js

the same ip should not be s=used while using the node mailer module

change the method of the form to be post in the html file

form method = "post" action = "send"


change the button type to be the submit button

button type="submit"


for name enter the name ="name"

for password enter the name = "password"	


THERE SHOULD BE A POST ROUTE AND A GET ROUTE IN ORDER TO PROPERLY FUNCTION THE NODEMAILER

With the request(req)   and response (res)

req.body.name is for gettting the name by the value entered by the user(anything the user write will be filled by it)

${req.body.name} 

generated etherreal user = original username or email (in my case its chikoo1998@zoho.com)




//////////////////////////////////////////////// MONGODB  ///////////////////////////////////////////////////////////////////////////////////

a database used to sstore the data

install mongodb

also known as graph database

the name of the database is dynamically creatd unlike mysql

no such concept of tables and rows here


database of student

student:{

	name : "abhijeet",
	e_no : "1221122121"

}

the objects are not uniform in mongodb

only one  database should be used for one operation

the wait time is reduced for admin to write the data

the database is the consistent database no need to wait for a operation to end

FAST


//////////////////////OPERATION/////////////////////
copy the path from the bin folder and paste it under

change the settings under the environment varaibles and change the path


now run the cmd  and type the mongod


type cd . ./. .

mkdir data \db

then type mongod

127.0.0.1:27017



mongo

show dbs to display the databases

ARBITER helps to make the primary database

the primary key in mongodb by default is the _id field.

do.foo.findAndModify({

query:<document>,		//THE DOCUMENT
update:<document>,    //WHAT CHANGE 
upsert:<boolean>,			
remove:<boolean>,			//TO BE DELETED
new:<boolean>,				
sort:<document>,			//QUERY ORDER
fields:<document>			//RETURN WHAT?
});

we are executing the function which contains the database.


ROBOMONGO INSTALL THE SOFTWARE
robo3t



												MONGO

mongo gives shell where we can execute mongodb commands

for accessing the mongo sshell in the terminal

for an example show dbs work only on the mpoonngo shell

if we run this on terminal it will show command not found	

MONGO CALLS MONGOSHELL OF MONGODB

WITH HELP OF SHELL WE CAN EXECUTE ANY QUERY OF MONGO DATABASE






													MONGOD


IT activates the mongo service in a computer background

for the submitting the data to database ,mongod is used





COMMANDS


MONGO FOR SHELL COMMAND

db shows the test databse

show collections|||  it show the collectuons of the databse	

show dbs ||| all the databses  are shown 


use db name ||||eg admin config local	





WE HAVE TO RUN MONGOD IN ONE WINDOWS AND THEN MONGO IN OTHER CMD WINDOW

IT AUTOMATICALLY CREATES ALL THE TABLES DYNAMICALLY

IT STORES THE DATA IN THE .JSON FORMAT

FOR SUBMITTING DATA TO MONGODB BY A FORM OR ANY OTHER METHOD(THROUGH HTML),
WE NEED TO START THE SERVICE OF MONGODB IN OUR SYSTEM THE COMMAND IS MONGOD

TYPE MONGOD
AFTER THAT MONGODB IS RUNNING ON YOUR COMPUTER

WE DONT NEED MONGO SHELL FOR ENTERING DATA
27017 IS THE BY DEFAULT PORT NUMBER


IF WE WANT TO USE A PARTICULAR DATABSE:==

|||||||||||||||||||||use hello|||||||||||||||||||||||||||   hello is the name of database

creating and using the database , the command is the same

use datbase_name	


DATABSE>COLLECTIONS>DOCUMENTS

we have to create collection

 db.games.save({
 	name : "CSGO",
 	skills : "global elite",
 	address : { },
 	street : "saitm",
 	pincode:"122506"
 })

||||||||||db.games.find()|||||||||||||||| it will display the data entered

db.NAME.save()

is the actual sytax for the following

we create object inside the object for eg for address
we just creats an object for the following

mongodb has its own documentation using the mongo shell

we have to read the documentation

the functions such as save(),find()  are very important.

connect in the robo3t

connection type settings

connect using the robo3t

||||||||||||connecting mongo db through node project|||||||||||||||||||

CONNECTING MONGO WITH NODE PROJECT

build a connect b/w node project and monogdb

step1: MONGO DB IS ALSO A SELF COMMAND WITH HELP OF THAT WE CAN CONNECT

WE USE A MODULE IS MONGOOSE FOR CONNECTING NODE PROJECT WITH MONGO DB DATABASE

STEP2:
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var mongooose = require('mongoose');  
 type this in app.js
const config =require('./config/database');   //for including the custom file

mongoose.connect(config.database);
let db = mongoose.connection;

//check connection
db.once('open',function(){
	console.log('connected to mongoDB');
});


//CHECK FOR DB ERRORS
db.on('error',function(err){
	console.log('err');
});

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

CONFIG AND THEN DATABASE.JS
create a folder named config and inside that create a file database.js
the content here will come there
module.exports = {
	database:'mongodb://localhost:27017/egvss',
	secret: 'yoursecret'
}


the databsae named egvss will AUTOMATICALLY be created if it does not exit


200= TRUE 	
400=FALSE


we can require any file using the require('/filename');

mongoose.connect(the parameter to be passed)

here in this case it is config.database.



// /////////////////////////////////////////////////////
                    CRUD OPERATION FINALLY

name="name" is a  necessary thing

form action is important

getting input to the form we define the name attributes



STEP1=>
CREATE A SCHEMA to input all the values from the form

for defining the schema we create a models folder inside the project
name enquiry.js

//////////CONTENT INSIDE THE ENQUIRY.JS//////////////////
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Enquiry = new Schema(
{
	name: String,
	email: String,
	subject: String,
	message: String
}
);


mongoose.model('enqs',Enquiry);
////////////////////////////////////////////////////

GO TO form and do the form action to /enqs
we have to define it in the routes/index.js



paste in routes



/////////////////////////////////////
router.post('/enq', function(req, res) {
  new Enquiry({name : req.body.name, email :
     req.body.email, subject : req.body.subject,
     message: req.body.message}
 
 
)
  .save(function(err, Enquiry) {
    console.log('enqs');
    res.send(`<h1> Your Message has been saved<h1>`);
  });
});

//////////////////////////////////

now require the models folder insdie the index.js

///////////////////////////////////
require('../models/enquiry');
var Enquiry = mongoose.model('enqs');

//////////////////////


var mongoose come in both index and app.js before the model commands

nodemailer +  mongosave data

just copy the code from  const to end inside the /enq


action = inform

res.render can be used fater the function in order to redirect to another html page


