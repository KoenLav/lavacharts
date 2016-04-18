module.exports = function (config) {
    config.set({
        basePath: '..',
        frameworks: [
            'jasmine'
        ],
        files: [
            'dist/lava.js',
            'tests/lava.spec.js'
        ],
        singleRun: true,
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],
        reporters: [
            'dots'
        ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: false,
        browsers: ['PhantomJS']
    });
};
