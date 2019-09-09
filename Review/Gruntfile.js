module.exports = function(grunt) {
    // Do grunt-related things in here
     // Project configuration.
  grunt.initConfig({
    aws: grunt.file.readJSON( 'aws-keys.json' ),
    build: {
        src: "js/*.js",
        dest: "js/min/script.js"
      },
      aws_s3: {
          options: {
              accessKeyId: '<%= aws.AWSAccessKeyId %>',
              secretAccessKey: '<%= aws.AWSSecretKey %>'
          },
          dist: {
              options: {
                  bucket: 'review-bundle-bucket'
              },
              files: [
                  {
                      expand: true,
                      cwd: 'public/',
                      src: [ '**' ],
                      dest: '/'
                  }
              ]
          }
      }
  });

  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.registerTask( 'deploy', 'aws_s3:dist' );
  };
