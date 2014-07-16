module.exports = {
    images: {
        expand: true,
        src: ['img/**'],
        dest: '<%= config.targetDir %>',
        cwd: '<%= config.srcDir %>' + '/'
    },
    meta: {
        expand: true,
        src: ['**'],
        dest: '<%= config.targetDir %>',
        cwd: '<%= config.srcDir %>' + '/meta/'
    },
    fonts: {
        expand: true,
        src: ['fonts/**'],
        dest: '<%= config.targetDir %>',
        cwd: '<%= config.srcDir %>' + '/'
    },
    js: {
        files: [{
            expand: true,
            src: ['js/**'],
            dest: '<%= config.targetDir %>',
            cwd: '<%= config.srcDir %>' + '/'
        }]
    },
    modulesjs: {
        files: [{
            expand: true,
            src: ['modules/**/*.js'],
            dest: '<%= config.targetDir %>',
            cwd: '<%= config.srcDir %>'
        }]
    },
    vendorjs: {
        files: [{
            expand: true,
            src: ['bower_components/**/*.js'],
            dest: '<%= config.targetDir %>',
            cwd: '<%= config.libDir %>'
        }]
    }
};