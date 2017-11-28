'use strict';
module.exports = function(grunt, configs) {
	grunt.config.set('uglify', {
        options : {
            mangle: false, // changes function and variable names
            compress: true,
            preserveComments: false,
            sourceMap: true,
        },
        my_target: {
            files : {
                'dist/ng-kit.input-title-case.min.js': [
                    'src/input-title-case.js',
                    'src/input-title-case.*.js',
                ],
            }
        },
	});
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
