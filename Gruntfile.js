module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            grunt: {
                src: ['Gruntfile.js']
            },
            build: {
                src: ['public/js/src/*.js']
            }
        },
        uglify: {
            build: {
                // Order is important here
                src: ['public/js/src/app.js', 'public/js/src/*.js'],
                dest: 'public/js/dist/script.min.js',
                options: {
                    preserveComments: false,
                    sourceMap: true,
                    enclose: {
                        'window': 'window',
                        'jQuery': '$'
                    },
                    beautify: false
                }
            }
        },
        compass: {
            build: {
                options: {
                    config: 'config.rb',
                    sourcemap: true
                }
            }
        },
        watch: {
            config: {
                files: ['Gruntfile.js', 'config.rb'],
                tasks: ['build'],
                options: {
                    reload: true
                }
            },
            script: {
                files: ['public/js/src/**/*.js'],
                tasks: ['build:js'],
                options: {
                    interrupt: true
                }
            },
            sass: {
                files: 'public/css/**/*.scss',
                tasks: ['build:css'],
                options: {
                    interrupt: true,
                    sourcemap: true
                }
            },
            livereload: {
                files: ['index.html', 'public/css/*.css', 'public/js/dist/*.js'],
                options: {
                    livereload: true
                }
            }
        },
        replace: {
            project_name: {
                src: ['config.rb', 'bower.json', 'package.json', '.htaccess'],
                overwrite: true,
                replacements: [{
                    from: '_defaultonepager',
                    to: grunt.option('project_name')
                }]
            },
            cache_bust: {
                src: ['index.html'],
                overwrite: true,
                replacements: [{
                    from: /(\s+)'global:cache_bust'(\s+)=> '\d+',/,
                    to: "$1'global:cache_bust'$2=> '" + (+new Date) + "'," //
                }]
            }
        }
    });

    // Load the plugins
    require('load-grunt-tasks')(grunt);

    grunt.registerTask(
        'build:js',
        'Validate and compress Javascript',
        ['jshint:build', 'uglify:build']
        );

    grunt.registerTask(
        'build:css',
        'Compile CSS',
        ['compass:build']
        );

    grunt.registerTask(
        'build',
        'Make a clean build',
        ['build:js', 'build:css']
        );

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};
