module.exports = function(config) {
    var configuration = {
        browsers: ["Chrome", "Firefox" /*, "OperaClassic"*/ ],

        customLaunchers: {
            Chrome_travis_ci: {
                base: "Chrome",
                flags: ["--no-sandbox"]
            }
        },

        frameworks: ["jasmine"],

        files: [{
                pattern: "lib/**",
                included: false,
                served: true,
                watched: true
            },
            "lib/webcomponentsjs/webcomponents.min.js",
            "src/*.html",
            "src/*.js",
            "tests/*.js"
        ],

        reporters: ["progress", "coverage"],

        preprocessors: {
            "src/**/*.js": ["coverage"]
        },

        coverageReporter: {
            type: "html",
            dir: "coverage/"
        }
    };

    if(process.env.TRAVIS){
        configuration.browsers = ["Chrome_travis_ci", "Firefox"];
    }

    config.set(configuration);    
};