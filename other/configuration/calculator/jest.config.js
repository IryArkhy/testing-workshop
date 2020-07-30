module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        //instead of requiring the exact file mocking css - we will require this obj-proxy object
        //use it for any loader you want, anything that is not supported by default
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./test/style-mock.js'),
    },
    //enable localStorage
    setupTestFrameworkScriptFile: require.resolve('./test/setup-test-framework.js'),
    //whitelist to collect coverage from
    collectCoverageFrom: [
        '**/src/**/*.js'
    ],
    coverageThreshold: {
        global: {
            statements: 18,
            branches: 12,
            functions: 19,
            lines: 18
        }
    }
}