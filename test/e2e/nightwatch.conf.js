require('babel-register')
var config = require('../../config')
const packageJson = require('../../package')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port)
      }
    },

    ci_chrome: {
      launch_url: "http://ondemand.saucelabs.com:80",
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_CRED_USR,
      access_key: process.env.SAUCE_CRED_PSW,
      desiredCapabilities: {
        name: packageJson.name,
        build: packageJson.name + '#build-${BUILD_NUMBER}',
        'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
        browserName: 'chrome'
      },
      globals: {
        waitForConditionTimeout: 10000
      }
    },

    ci_firefox: {
      launch_url: "http://ondemand.saucelabs.com:80",
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_CRED_USR,
      access_key: process.env.SAUCE_CRED_PSW,
      desiredCapabilities: {
        name: packageJson.name,
        build: packageJson.name + '#build-${BUILD_NUMBER}',
        'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
        browserName: 'firefox'
      },
      globals: {
        waitForConditionTimeout: 10000
      }
    },

    ci_ie11: {
      launch_url: "http://ondemand.saucelabs.com:80",
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_CRED_USR,
      access_key: process.env.SAUCE_CRED_PSW,
      desiredCapabilities: {
        name: packageJson.name,
        build: packageJson.name + '#build-${BUILD_NUMBER}',
        'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11.103',
      },
      globals: {
        waitForConditionTimeout: 10000
      }
    },

    ci_safari: {
      launch_url: "http://ondemand.saucelabs.com:80",
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_CRED_USR,
      access_key: process.env.SAUCE_CRED_PSW,
      desiredCapabilities: {
        name: packageJson.name,
        build: packageJson.name + '#build-${BUILD_NUMBER}',
        'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
        browserName: 'safari'
      },
      globals: {
        waitForConditionTimeout: 10000
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
