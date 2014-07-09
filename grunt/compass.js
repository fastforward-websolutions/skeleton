module.exports = {
    dist: {
        options: {
            sassDir        : '<%= config.srcDir %>' + "/css",
            cssDir         : '<%= config.targetDir %>' + "/css",
            fontsDir       : '<%= config.targetDir %>' + "/fonts",
            imagesDir      : '<%= config.srcDir %>' + "/img",
            javascriptsDir : '<%= config.srcDir %>' + "/js",
            importPath     : ['<%= config.srcDir %>'],
            relativeAssets : true,
            noLineComments : true
        }
    }
};