
//My comments
var why="Not only does the _underscore library have some useful functions, but other libraries, like backbone depend on it. Here I provide examples of how to use some of the most useful functions.";
//The functions
var smap="_.map(list, iterator, [context])\nProduces a new array of values by mapping each value in list through a transformation function (iterator). If the native map method exists, it will be used instead. If list is a JavaScript object, iterator's arguments will be (value, key, list).";

var mapCode="var obj1 = {}; var obj2 = {}; var obj3 = {}; var myArray = [obj1,obj2,obj3]; var txt = document.getElementById(\"maptxt\");\nxt.innerHTML = \"BEFORE:\\n\";for(var n=0; n < myArray.length; n++){txt.innerHTML = txt.innerHTML +\"obj[\"+n+\"].nothing is \"+\nmyArray[n].nothing;txt.innerHTML = txt.innerHTML+\"\\n\";";

var sreduce="_.reduce(list, iterator, memo, [context]) reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iterator. The iterator is passed four arguments: the memo, then the valueand index (or key) of the iteration, and finally a reference to the entire list.";

var reduceCode="function exreduce(){\nvar newsum = _.reduce([5,4,3, 2, 1], function(memo,num){\nreturn memo * num; }, 1);reducetxt.innerHTML = newsum;}";

var sunion="_.union(*arrays) Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.";

var unionCode="var uniontxt = document.getElementById('uniontxt');\nvar nameList1 = ['Fred','Flintstone','Wilma','Flintstone','Pebbles','Flintstone'];\nvar nameList2 = ['Barney','Rubble','Betty','Rubble','Bambam','Rubble']; uniontxt.innerHTML = _.union(nameList1,nameList2);";

var szip="_.zip(*arrays) Merges together the values of each of the arrays with the values at the corresponding position. Useful when you have separate data sources that are coordinated through matching array indexes. If you're working with a matrix of nested arrays, _.zip.applycan transpose the matrix in a similar fashion.";

var zipCode="ziptxt.innerHTML = _.zip(['Fred','Wilma','Pebbles','Barney','Betty','Bambam'],['Flintstone','Flintstone','Flintstone','Rubble','Rubble','\nRubble']);";

var sextend="extend_.extend(destination, *sources) Copy all of the properties in the source objects over to the destination object, and return the destination object. It's in-order, so the last source will override properties of the same name in previous arguments.";

var extendCode="function addcommonproperties(){\nreturn _.extend({legs:'4'},{tail:true},{fir:true},{weight:''},{color:''});}\nvar bear = addcommonproperties();\nvar cow = addcommonproperties();\nvar dog = addcommonproperties();\nextendtxt.innerHTML = Object.keys(bear)+Object.keys(cow)+Object.keys(dog);";

var spick="_.pick(object, *keys) Return a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys).";

var pickCode="var UserLikes = _.pick({userID:27,frenchfries:true,pizza:false,pushi:true},'userID','pizza');	picktxt.innerHTML= UserLikes.userID + ' likes pizza? ' + UserLikes.pizza;";

var sinvert="_.invert(object) Returns a copy of the object where the keys have become the values and the values the keys. For this to work, all of your object's values should be unique and string serializable.";

var invertCode="inverttxt.innerHTML = Object.keys(_.invert({full:'empty',high:'low',hot:'cold'}));";

var spluck="pluck_.pluck(list, propertyName) A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.";

var pluckCode="var myObjs = [{firstName:'Fred',lastName:'Flintstone'},{firstName:'Barney',lastName:'Rubble'},{firstName:'Mr.',lastName:'Slate'}];\nvar myNames = _.pluck(myObjs,'firstName'); plucktxt.innerHTML = myNames[0] + ',' + myNames[1] + ',' + myNames[2];";


