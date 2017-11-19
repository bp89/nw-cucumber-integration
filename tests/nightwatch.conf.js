// var argv = require('minimist')(process.argv.slice(2));
// console.dir(argv);

// var json = argv.phase === "test" ? require('../config/dev.js') : require('../config/test.js')
module.exports = require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require',
        'step_definitions',
        '--format',
        'node_modules/cucumber-pretty',
        '--format',
        'json:reports/cucumber.json',
        'features'
    ]
});
module.exports = {
    "src_folders": [
        "test-cases"
    ],
    "output_folder": "reports",
    "custom_commands_path": "",
    "custom_assertions_path": "",
    "page_objects_path": "./pageObjects",
    "globals_path": "globals.json",

    "selenium": {
        "start_process": true,
        "server_path": "../bin/selenium-server-standalone-3.7.1.jar",
        "log_path": "",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": "../bin/chromedriver",
            "webdriver.gecko.driver": ""
        }
    },

    "test_settings": {
        "default": {
            "launch_url": "http://localhost:4000",
            "selenium_port": 4444,
            "selenium_host": "localhost",
            "silent": true,
            "screenshots": {
                "enabled": true,
                "path": "screenshots"
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "marionette": true,
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "chromeOptions": {
                    "args": [
                        "start-fullscreen"
                    ]
                }
            }
        }
    }
};