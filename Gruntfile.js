module.exports=function(grunt){
	grunt.initConfig({
jshint:{
	files:['gruntfile.js','*.js','test/**/*.js']
},
simplemocha:{
	options:{
		timeout:3000,
		ignoreLeaks:true,
		reporter:'tap'
	},
	all:{src:['test/**/*.js']}
}

});

grunt.loadNpmTasks('grunt-contrib-jshint');

grunt.registerTask('default',['jshint']);
};