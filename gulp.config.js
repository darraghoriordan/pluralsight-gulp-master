module.exports = function() {
    var client = './src/client/';
    var config = {
        temp: './.tmp',

        // All the js to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],

        less: client + 'styles/styles.less'

    };

    return config;
};
