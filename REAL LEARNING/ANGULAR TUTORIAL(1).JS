front end framework

it has inbuild functions and works on moduels just like node js

eg for validation we can use a module

no such connection with node and angular

react is made by fb

expressive html 

databinding

in angular 2 types of databinding are there

1.  one way binding - interpolation
2. two way binding


one way-binding
calling from a varable - one way binding

thats a unique thing in angular

It IS modular by design

build in backend integration with angular

data is saved is json format

there is no need to save a database

angular 7 is the latest

IT IS BASED ON TYPESCRIPT

TYPE SCRIPT IS THE SUPERSET OF JAVASCRIPT

all things of js is in typescript

we can say that enhanced js

built for speed,modern,simplified

we can understand anyone's code with angular



application = component+component+.........

these components forms services


COMPONENT DEFINITION
COMPONENTS = TEMPLATE + CLASS(properties,methods) + METADATA

tempate=>
view layout
created with html
includes binding and directives


class=>
code supporting the view
creating with type script
properties:  data
methods : logic


metadata=>
extra data for angular
defined with a decorator


SO THE MAIN THING TO CODE IS IN TEMPLATE AND CLASS



MODULE OF ANGULAR

ES MODULE IS THE USER DEFINED MODULE

ANGULAR MODUELS ARE THE BUUILT IN MODULES WHICH CAN MAKE WORK EASIER

export keyword and import keyword is used


transpile === converts ts in js code

node understand ts now since version 10

there is no need to include the file extension in import




/////////////////BASIC LAYOUT OF ANGULAR////////////



//////////////////////////import///////////////
app.component.ts 
import {component} from '@angular/core' ;

//@component is the decorator



///////////metadata and template///////////////////
@component({                        
	selector ; 'pm-root',    //this is the metadata
	template:                     //actual template,all designing takes place
	<div><h1>{{page title}}</h1>
		<div>my first component</div>
	</div>
})




/////////////////////class/////////////////////////////
export class AppComponent {
	pageTitle:string = ' Acme Product Management ' ;
}

THE CODE EXPORTS THE CLASS

/////////////////////BASIC LAYOUT ENDS///////////////////////



///////////////CREATING THE COMPONENT CLASS//////////////

export class AppComponent {
	pageTtitle : string = ' Acme Product Management ';
}



HERE CLASS IS CLASS KEYWORD

AppComponent is the class name and component name when used in the code

export is the export keyword


//////CREATION ENDS/////////////


DECORATOR

a function that adds metadata to the 





MAIN MODULES

@angular/core

@angular/animate

@angular/http 

@angular/router



/////////DEFINING THE TEMPLATE////////

1. INLINE TEMPLATE

"<h1>{{pageTitle}}</h1>"

2.ANOTHER INLINE TEMPLATE

template:
<div>
<h1>{{pageTitle}}</h1>
<div>
My First COMPONENT</div>
</div>

3.TEMPLATE LINK




node is required to be installeed in order to run angular

/////////////////ANGULAR INSTALLATION///////////////

npm install -g  @angular/cli

ng --version  FOR CHECKING THE VERSION OF ANGULAR


npm clean cache for not working npm install

IMPORT IS ABOVE THE DOCUMENT
CLASS METADATA 

npm cache clean

ng is the basic command

//////////THE COMMAND TO GENERATE A PROJECT////

ng new ABHIJEET --skip-install --prefix AB    //where abhijeet is the name of project


add          --routing                in last if u want
the folder with the name of the project is made on the path specified

open the folder in sublime or vscode

.////FILES IN ANGULAR FOLDER//

e2e n2n used for testing ///NO NEED TO GO THERE

package.json //contains all the modules names

angular.json //CONTAINS THE USING MODUELS WITH THE FULL DEFINED PATH//


//TO DEFINE THE PATH OF MODULE WE USE THIS ONE//


now go inside the PROJECT FOLDER AND INSIDE IT

npm install  //IT WILL INSTALL THE MODULES


npm start //type this 


// THERE IS NO NEED TO RESTART USING NPM START IN ANGULAR

//127.0.0.1:4200//THE PORT NUMBER

//BONUS ng serve  --open will open the browser window   also
 

//src the most important folder

//STYLES.CSS IS THE DEFUALT CSS FILE 
DEFINES STYLES GLOBALLY

IN THIS FOLDER WE CAN IMPORT SOME OF OUR MODULES LIKE BOOTSTRAP

AB-ROOT IS THE PREFIX WE ADDED

//GO INSIDE APP

SPEC.TS IS USELESS FOR TESTING


app.component.ts //is the most important file

THIS IS THE COMPONENT FILE

/////selector is metadata///

///@component is the decorator///

import { Component } from '@angular/core';

@Component({
  selector: 'AB-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABHIJEET';
}


//the code can be used anywhere

the component will be called with the help of selector

//APP.MODULE.TS IS WHERE THE EXPORTED CODE WILL BE USED

//THE COMPONENT NEEDS TO BE DEFINED HERE//



//WE WILL CODE IN APP.COMPONENT.TS BUT WILL BE DISPLAYED USING INDEX.HTML



//SELECTOR IS USED WITH THE HELP OF TAGS 
LIKE AB-ROOT IN MY CASE


//insde the cmd type//
ng g c header
ng genrate component SAMPLE

header will be created inside the app folder


the routing will automatically be done

AB-header named thing will be created for header


type this in app.component.html

<AB-header></AB-header>

we can also change the css attributes

Design the header and footer of the webpage

make a form in angular also

we can use as a footer also



DOWNLOADING AND LINKING BOOTSTRAP 

npm install bootstrap@4.2

copy this in angular.json
"./node_modules/bootstrap/dist/css/bootstrap.min.css"

scripts
at line 26 after



@import '~bootstrap/dist/css/bootstrap.min.css';
//COPY IN STYLES.CSS

CREATING A SAMPLE TABLE WITH ANGULAR

GO IN TABLE.COMPONENT.TS

CREATE IN


products :any[ ] = [
	{
		"Firstname" : "abhijeet",
		"Lastname" : "gautam",
		"email" : "chikoo1998@gmail.com"
	}
]



REMOVE NGONIT AND CONSTRUCTOR



PUT COMMA AFTER THAT

*ngIf = 'products && products.length'


//  <tr *ngFor='let product of products'>

<tr *ngFor='let sample of NAMES'>
        <td>{{sample.Firstname}}</td>
        <td>{{sample.Lastname}}</td>
        <td>{{sample.email}}</td>
      </tr>



      //A sample table using the angular


      ng new PROJECT --routing