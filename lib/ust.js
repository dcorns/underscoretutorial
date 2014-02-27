	

UTUT();

function UTUT(){
	"use strict";
		var App=document.getElementById("app");
		App.innerHTML="<h1>A little _Underscore Tutorial</h1><h3>8 useful functions</h3><div id=funkylist></div>";

		var FL=document.getElementById('funkylist');

//Main Containers
	FL.innerHTML="<h2 id='map'>map</h2><h2 id='reduce'>reduce</h2><h2 id='union'>union</h2><h2 id='zip'>zip</h2><h2 id='extend'>extend</h2><h2 id='pick'>pick</h2><h2 id='invert'>invert</h2><h2 id='pluck'>pluck</h2>";
	      


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
	pmap.innerHTML=pmap.innerHTML+"<label class=example>This example adds the nothing property to each object.</label></br>";
	pmap.innerHTML = pmap.innerHTML+"<textarea class=code>"+mapCode + "</textarea>";
	pmap.innerHTML=pmap.innerHTML + "<textarea id=maptxt></textarea></br>";
	pmap.innerHTML = pmap.innerHTML + "<button onclick=expmap();>RUN CODE</button>";

	preduce.innerHTML = preduce.innerHTML + "<h3><label class=syntax>" + sreduce + "</label></h3>";
	preduce.innerHTML = preduce.innerHTML + "<label class=example>This example calculates the factorial of 5. (5!)</label></br>";
	preduce.innerHTML = preduce.innerHTML + "<textarea class=code>" + reduceCode + "</textarea>";
	preduce.innerHTML = preduce.innerHTML + "<textarea id=reducetxt></textarea></br>";
	preduce.innerHTML = preduce.innerHTML + "<button onclick=exreduce();>RUN CODE</button>";

	punion.innerHTML = punion.innerHTML + "<h3><label class=syntax>" + sunion + "</label></h3>";
	pzip.innerHTML = pzip.innerHTML + "<h3><label class=syntax>" + szip + "</label></h3>";
	pextend.innerHTML = pextend.innerHTML + "<h3><label class=syntax>" + pextend + "</label></h3>";
	ppick.innerHTML = ppick.innerHTML + "<h3><label class=syntax>" + spick + "</label></h3>";
	pinvert.innerHTML = pinvert.innerHTML + "<h3><label class=syntax>" + sinvert + "</label></h3>";
	ppluck.innerHTML = ppluck.innerHTML + "<h3><label class=syntax>" + spluck + "</label></h3>";
//Code Containers

	
	punion.innerHTML = punion.innerHTML + "<textarea class=code>" + unionCode + "</textarea>";
	pzip.innerHTML = pzip.innerHTML + "<textarea class=code>" + zipCode + "</textarea>";
	pextend.innerHTML = pextend.innerHTML + "<textarea class=code>" + extendCode + "</textarea>";
	ppick.innerHTML = ppick.innerHTML + "<textarea class=code>" + pickCode + "</textarea>";
	pinvert.innerHTML = pinvert.innerHTML + "<textarea class=code>" + invertCode + "</textarea>";
	ppluck.innerHTML = ppluck.innerHTML + "<textarea class=code>" + pluckCode + "</textarea>";

//Comment Containers


//Try example buttons

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
		
		for(var n = 0;n<myArray.length;n++){
			txt.innerHTML = txt.innerHTML + "obj[" + n + "].nothing is " + myArray[n].nothing;
			txt.innerHTML = txt.innerHTML + "\n";
		}

	}

//Factorial of 5
	function exreduce(){
		var newsum = _.reduce([5,4,3, 2, 1], function(memo, num){ return memo * num; }, 1);
		reducetxt.innerHTML = newsum;
	}

	function expunion(){
alert('map example');
	}

	function expzip(){
alert('map example');
	}

	function expextend(){
alert('map example');
	}

	function exppick(){
alert('map example');
	}

	function expinvert(){
alert('map example');
	}

	function exppluck(){
alert('map example');
	}
