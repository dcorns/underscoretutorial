
//My comments
var why="Not only does the _underscore library have some useful functions, but other libraries, like backbone depend on it. Here I provide examples of how to use some of the most useful functions.";
//The functions
var smap="map_.map(list, iterator, [context])\n Alias: collect \nProduces a new array of values by mapping each value in list through a transformation function (iterator). If the native map method exists, it will be used instead. If list is a JavaScript object, iterator's arguments will be (value, key, list).";

var mapCode="var obj1 = {}; var obj2 = {}; var obj3 = {}; var myArray = [obj1,obj2,obj3]; var txt = document.getElementById(\"maptxt\");\nxt.innerHTML = \"BEFORE:\\n\";for(var n=0; n < myArray.length; n++){txt.innerHTML = txt.innerHTML +\"obj[\"+n+\"].nothing is \"+\nmyArray[n].nothing;txt.innerHTML = txt.innerHTML+\"\\n\";";

var sreduce="reduce_.reduce(list, iterator, memo, [context]) Aliases: inject, foldl Also known as inject and foldl, reduce boils down a list of values into a single value.Memo is the initial state of the reduction, and each successive step of it should be returned by iterator. The iterator is passed four arguments: the memo, then the valueand index (or key) of the iteration, and finally a reference to the entire list.";

var reduceCode="function exreduce(){\nvar newsum = _.reduce([5,4,3, 2, 1], function(memo,num){\nreturn memo * num; }, 1);reducetxt.innerHTML = newsum;}";

var sunion="union_.union(*arrays) Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.";

var unionCode="_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]); => [1, 2, 3, 101, 10]";

var szip="zip_.zip(*arrays) Merges together the values of each of the arrays with the values at the corresponding position. Useful when you have separate data sources that are coordinated through matching array indexes. If you're working with a matrix of nested arrays, _.zip.applycan transpose the matrix in a similar fashion.";

var zipCode="_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]); => [['moe', 30, true], ['larry', 40, false], ['curly', 50, false]] _.zip.apply(_, arrayOfRowsOfData); => arrayOfColumnsOfData";

var sextend="extend_.extend(destination, *sources) Copy all of the properties in the source objects over to the destination object, and return the destination object. It's in-order, so the last source will override properties of the same name in previous arguments.";

var extendCode="_.extend({name: 'moe'}, {age: 50}); => {name: 'moe', age: 50}";

var spick="pick_.pick(object, *keys) Return a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys).";

var pickCode="_.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age'); => {name: 'moe', age: 50}";

var sinvert="invert_.invert(object) Returns a copy of the object where the keys have become the values and the values the keys. For this to work, all of your object's values should be unique and string serializable.";

var invertCode="_.invert({Moe: 'Moses', Larry: 'Louis', Curly: 'Jerome'}); => {Moses: 'Moe', Louis: 'Larry', Jerome: 'Curly'};";

var spluck="pluck_.pluck(list, propertyName) A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.";

var pluckCode="var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]; _.pluck(stooges, 'name'); => ['moe', 'Larry', 'curly']";


