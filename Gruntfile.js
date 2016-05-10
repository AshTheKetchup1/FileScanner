module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks. loads tasks

	var srcFiles = 'src/**/*.js';
	var testFiles = 'test/**/*.js';

	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			test: {
				command: "node ./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha -- -c"				
			},
			clean: {
				command: "rm -rf ./coverage"
			}
		},
		jshint: {
			options: {
				esversion: 6,
				"node": true,
				"mocha": true,
				"undef": true
			},
			src: srcFiles,
			test: testFiles,
			Gruntfile: 'Gruntfile.js'
		},
		watch: {
			options: {
				livereload: true
			},
			src: {
				files: [srcFiles],
				tasks: ['jshint:src', 'exec:test']
			},
			test: {
				files: [testFiles],
				tasks: ['jshint:test', 'exec:test']
			},
			Gruntfile: {
				files: ['Gruntfile.js'],
				tasks: ['jshint:Gruntfile']
			}
		},
		connect: {
			server:{
				options: {
					livereload: true,
					hostname: '127.0.0.1',
					port: '9001',
					open: true,
					base: './coverage/lcov-report/'
				}
			}
		}
	});

	// Default task(s)
	grunt.registerTask('test', ['jshint', 'shell:test']);
	grunt.registerTask('clean', ['shell:clean']);
	grunt.registerTask('default', ['test', 'connect', 'watch']);
};