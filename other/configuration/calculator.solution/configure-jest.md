1.  cd other/configuration/calculator
2.  npm run dev --> localhost:8080 --> cool calculator
3.  npm i -D jest
4.  go to package.json
5.  add a "test" script: "test": "jest"
6.  npm run test ==> "hey, I didn't find any test"--> anything that match this regex: "**/**tests**/**/_.js?(x),\*\*/(_.)(spec|test).js?(x)" - will count as a test file;
    7.npm run test --> test failed;
    8.babelrs.js:
    const isTest = String(process.env.NODE_ENV) === 'test';
    ...
    presets: [['env', {modules: isTest ? 'commonjs' : false}],
    ...
7.  package.json:
    "jest": {
    "testEnvironment": "jest-environment-node" or "jest-environment-jsdom"
    },
8.  you can replace the string above in the package.json and add it to jest.config.js
9.  add mocks into /test folder
10. add libraries:
    npm i -D babel-plugin-dynamic-import-node

    npm i --save-dev identity-obj-proxy

11. modify jest.config.js (add mock of css modules and localStorage) and babelrc.js (add plugin to support dynamic imports)
12. add coverage by adding a flaf --coverage into script "test": "jest --coverage"

The output in the terminal will give you a report on coverage (a table with all files). It also automatically creates a /coverage folder in the root directory

13. in the terminal hit this command: open coverage/lcov-report/index.html
14. It will bring you to the html page that shows you the report. The code in your components that lit up with red - is not tested--> you would want to write tests for it as well.
15. The problem: the test file are also included in the report. You want to exclude them --> go to the jest.config.js and modify it
16. the coverage table will give you a percentage of covering of your code with tests. If you want to ensure that code coverage will not be lower a certain percentage, you can enforce that in the jest config by adding "coverageThreshold". And you can specify the % for the whole app or a % for specific files or folders
17. watch mode = "test:watch": "jest --watch". //it will run only changed files. If the files did not change since last commit - jest will not run tests on them.
18. Can I update coverage during the watch mode? Not at the moment of the webinar (2 years ago), but now - maybe
19. Other feature: multiple configs for jest
