module.exports = function(grunt) {
		
		"use strict";

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        /**
		 * Sass
		 */

		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      sourcemap: 'none',
		    },
		    files: {
		      '_compiled/css/main-human.css': '_scss/main.scss'
		    }
		  },
		  dist: {
		    options: {
		      style: 'compressed',
		      sourcemap: 'none',
		    },
		    files: {
		      '_compiled/css/main.css': '_scss/main.scss'
		    }
		  }
		},

		/**
	  	 * Autoprefixer
	  	 */
	  	autoprefixer: {
	  		options: {
	  			browsers: ['last 2 versions']
	  		},
	  		// prefix all files
	  		multiple_files: {
	  			expand: true,
	  			flatten: true,
	  			src: '_compiled/css/*.css',
	  			dest: 'css/'
	  		}
	  	},
	  	shell: {
	      jekyllServe: {
	        command: "jekyll serve --baseurl="
	      },
	      jekyllBuild: {
	        command: "jekyll build --config _config-dev.yml"
	      }
	    },
	  	/**
	  	 * Watch
	  	 */
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass','autoprefixer','shell:jekyllBuild']
			},
			options: {
				spawn: false,
				livereload: true
			}
		},
	});
	require("load-grunt-tasks")(grunt);
  grunt.registerTask("serve", ["shell:jekyllServe"]);
  grunt.registerTask("default", ["sass", "autoprefixer", "shell:jekyllBuild", "watch"]);
}