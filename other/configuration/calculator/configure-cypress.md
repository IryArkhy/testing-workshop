1.  install cypress as dev dependency
2.  npx command run a binaty that exists in your node_modules: npx cypress open --> it will open a window on your screen and redirect you on the page and will show what can you do with cypress
    3.cypress.json and /cypress have been created. /cypress/fixtures --> you can put a default user that will always be in your DB
3.  /cypress/integrations -> you can change the foulder name to e2e
4.  /cypress/plugins
5.  /cypress/support/commands
6.  delete /integrations and create /e2e
7.  put a integration test there. npm i -D cypress-testing-library
8.  modify cypress.json
9.  go to other/configuration/calculator/cypress/support/index.js
10. add an import of testing library
11. npx cypress open AND npm run dev
12. If you don't want it to run on two windows, you can run multiple scripts on parallel: npm i -D npm-run-all
13. package.json
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "test:e2e": "npm-run-all --parallel --race start cy:run",
    "test:e2e:dev": "npm-run-all --parallel dev cy:open"
14. npm run build
15. npm run test:e2e:dev
