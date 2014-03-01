	

UTUT();

function UTUT(){
	"use strict";
		var App=document.getElementById("app");
		App.innerHTML="<h1>A short _Underscore Tutorial</h1><h3>8 useful functions</h3><div id=funkylist></div>";

		var FL=document.getElementById('funkylist');

//Main Containers
	FL.innerHTML="<h2 class=thatswhy>"+ why + "</h2><h2 id='map' class=titles>map</h2><h2 id='reduce' class=titles>reduce</h2><h2 id='union' class=titles>union</h2><h2 id='zip' class=titles>zip</h2><h2 id='extend' class=titles>extend</h2><h2 id='pick' class=titles>pick</h2><h2 id='invert' class=titles>invert</h2><h2 id='pluck' class=titles>pluck</h2>";
	      


//Topic Containers
	var pmap=document.getElementById("map");
	var preduce=document.getElementById("reduce");
	var punion=document.getElementById("union");
	var pzip=document.getElementById("zip");
	var pextend=document.getElementById("extend");
	var ppick=document.getElementById("pick");
	var pinvert=document.getElementById("invert");
	var ppluck=document.getElementById("pluck");
//Syntax Containers
	
	pmap.innerHTML=pmap.innerHTML+"<h3><label class=syntax>"+smap+"</label></h3>";
	pmap.innerHTML=pmap.innerHTML+"<label class=example>This is a great alternative to a looping operation such as for() or while(). This example adds the nothing property to each object.</label></br>";
	pmap.innerHTML = pmap.innerHTML+"<textarea class=code>"+mapCode + "</textarea>";
	pmap.innerHTML=pmap.innerHTML + "<textarea id=maptxt></textarea></br>";
	pmap.innerHTML = pmap.innerHTML + "<button onclick=expmap();>RUN CODE</button>";

	preduce.innerHTML = preduce.innerHTML + "<h3><label class=syntax>" + sreduce + "</label></h3>";
	preduce.innerHTML = preduce.innerHTML + "<label class=example>First thing I think of here is a factorial function (5!). If you have a more practical idea for this, please post it. </label></br>";
	preduce.innerHTML = preduce.innerHTML + "<textarea class=code>" + reduceCode + "</textarea>";
	preduce.innerHTML = preduce.innerHTML + "<textarea id=reducetxt></textarea></br>";
	preduce.innerHTML = preduce.innerHTML + "<button onclick=exreduce();>RUN CODE</button>";

	punion.innerHTML = punion.innerHTML + "<h3><label class=syntax>" + sunion + "</label></h3>";
	punion.innerHTML = punion.innerHTML + "<label class=example>This function is great for removing duplicate text when you just need to find one occurance. Perhaps you need to know if something occured, but do not care how many times. Or maybe you want to build a customer list from a list of purchases where each customer may have made multiple purchases.</label></br>";
	punion.innerHTML = punion.innerHTML + "<textarea class=code>" + unionCode + "</textarea>";
	punion.innerHTML = punion.innerHTML + "<textarea id=uniontxt></textarea></br>";
	punion.innerHTML = punion.innerHTML + "<button onclick=exunion();>RUN CODE</button>";

	pzip.innerHTML = pzip.innerHTML + "<h3><label class=syntax>" + szip + "</label></h3>";
	pzip.innerHTML = pzip.innerHTML + "<h3><label class=example>I'm sure I will need this for something.</label></h3>";
	pzip.innerHTML = pzip.innerHTML + "<textarea class=code>" + zipCode + "</textarea>";
	pzip.innerHTML = pzip.innerHTML + "<textarea id=ziptxt></textarea></br>";
	pzip.innerHTML = pzip.innerHTML + "<button onclick=exzip();>RUN CODE</button>";
	
	pextend.innerHTML = pextend.innerHTML + "<h3><label class=syntax>" + sextend + "</label></h3>";
	pextend.innerHTML = pextend.innerHTML + "<h3><label class=example>One use for this could be to define common properties that can be added to objects to save some development time.</label></h3>";
	pextend.innerHTML = pextend.innerHTML + "<textarea class=code>" + extendCode + "</textarea>";
	pextend.innerHTML = pextend.innerHTML + "<textarea id=extendtxt></textarea></br>";
	pextend.innerHTML = pextend.innerHTML + "<button onclick=exextend();>RUN CODE</button>";

	ppick.innerHTML = ppick.innerHTML + "<h3><label class=syntax>" + spick + "</label></h3>";
	ppick.innerHTML = ppick.innerHTML + "<h3><label class=example>Perhaps you would like to find out how many people on your list like pizza.</label></h3>";
	ppick.innerHTML = ppick.innerHTML + "<textarea class=code>" + pickCode + "</textarea>";
	ppick.innerHTML = ppick.innerHTML + "<textarea id=picktxt></textarea></br>";
	ppick.innerHTML = ppick.innerHTML + "<button onclick=expick();>RUN CODE</button>";

	pinvert.innerHTML = pinvert.innerHTML + "<h3><label class=syntax>" + sinvert + "</label></h3>";
	pinvert.innerHTML = pinvert.innerHTML + "<h3><label class=example>You tell me.</label></h3>";
	pinvert.innerHTML = pinvert.innerHTML + "<textarea class=code>" + invertCode + "</textarea>";
	pinvert.innerHTML = pinvert.innerHTML + "<textarea id=inverttxt></textarea></br>";
	pinvert.innerHTML = pinvert.innerHTML + "<button onclick=exinvert();>RUN CODE</button>";

	ppluck.innerHTML = ppluck.innerHTML + "<h3><label class=syntax>" + spluck + "</label></h3>";
	ppluck.innerHTML = ppluck.innerHTML + "<h3><label class=example>Just give me everyone's first name.</label></h3>";
	ppluck.innerHTML = ppluck.innerHTML + "<textarea class=code>" + pluckCode + "</textarea>";
	ppluck.innerHTML = ppluck.innerHTML + "<textarea id=plucktxt></textarea></br>";
	ppluck.innerHTML = ppluck.innerHTML + "<button onclick=expluck();>RUN CODE</button>";

}
	//Examples
//add the same property to many objects
	function expmap(){
		var obj1 = {}; var obj2 = {}; var obj3 = {};
		var myArray = [obj1,obj2,obj3];
		var txt = document.getElementById("maptxt");
		txt.innerHTML = "BEFORE:\n";

		for(var n = 0;n < myArray.length;n++){
			txt.innerHTML = txt.innerHTML + "obj[" + n + "].nothing is " + myArray[n].nothing;
			txt.innerHTML = txt.innerHTML + "\n";
		}


		_.map(myArray,function(obj){return obj.nothing = 'do nothing'});

		txt.innerHTML = txt.innerHTML + "AFTER:\n";
		
		for(var n = 0;n < myArray.length;n++){
			txt.innerHTML = txt.innerHTML + "obj[" + n + "].nothing is " + myArray[n].nothing;
			txt.innerHTML = txt.innerHTML + "\n";
		}

	}

	//Factorial of 5
	function exreduce(){
		var reducetxt = document.getElementById("reducetxt");
		var newsum = _.reduce([5,4,3, 2, 1], function(memo, num){ return memo * num; }, 1);
		reducetxt.innerHTML = newsum;
		
	}

	function exunion(){
		var uniontxt = document.getElementById('uniontxt');
		var nameList1 = ['Fred','Flintstone','Wilma','Flintstone','Pebbles','Flintstone'];
		var nameList2 = ['Barney','Rubble','Betty','Rubble','Bambam','Rubble'];

		uniontxt.innerHTML = _.union(nameList1,nameList2);

		 
	}
	

	function exzip(){

		ziptxt.innerHTML = _.zip(['Fred','Wilma','Pebbles','Barney','Betty','Bambam'],['Flintstone','Flintstone','Flintstone','Rubble','Rubble','Rubble']);
	}


	function exextend(){

		function addcommonproperties(){
			return _.extend({legs:'4'},{tail:true},{fir:true},{weight:''},{color:''});
		}

		var bear = addcommonproperties(); var cow = addcommonproperties();
		var dog = addcommonproperties();
		extendtxt.innerHTML = Object.keys(bear)+'\n'+Object.keys(cow)+'\n'+Object.keys(dog);
	}

	function expick(){
		var UserLikes = _.pick({userID:27,frenchfries:true,pizza:false,sushi:true},'userID','pizza');
		picktxt.innerHTML= UserLikes.userID + ' likes pizza? ' + UserLikes.pizza;
	}

	function exinvert(){

		inverttxt.innerHTML = Object.keys(_.invert({full:'empty',high:'low',hot:'cold'}));
	}

	function expluck(){

		var myObjs = [{firstName:'Fred',lastName:'Flintstone'},{firstName:'Barney',lastName:'Rubble'},{firstName:'Mr.',lastName:'Slate'}];
		var myNames = _.pluck(myObjs,'firstName');
		plucktxt.innerHTML = myNames[0] + ',' + myNames[1] + ',' + myNames[2];

	}


