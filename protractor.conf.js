//protractor.conf.js


exports.config = {
  resultJsonOutputFile: 'e2e/reports/ui.json',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 2500000,
  allScriptsTimeout: 2500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
 
  
  capabilities: {
    'browserName': 'chrome',
	chromeOptions: {            
	args: ['--disable-extensions','--disable-infobars' ,'--disable-web-security']       
	}
  },
 

  specs: [
    'e2e/features/loginView.feature', 'e2e/features/loginDone.feature', 'e2e/features/talkGroup.feature'
  ],
  
  baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: 'e2e/steps/*.spec.js',
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true
  }
};