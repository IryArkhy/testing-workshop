// this is the jest setupTestFrameworkScriptFile

// here we set up a fake localStorage because jsdom doesn't support it
// https://github.com/tmpvar/jsdom/issues/1137

//it doesn't simulate things perfectly but as long as you just use a methods on it and not worrying about the "dot" syntax (like  localStorage.foo.bar.baz) - you can use this mock
if (!window.localStorage) {
  window.localStorage = {}
  Object.assign(window.localStorage, {
    removeItem: function removeItem(key) {
      delete this[key]
    }.bind(window.localStorage),
    setItem: function setItem(key, val) {
      this[key] = String(val)
    }.bind(window.localStorage),
    getItem: function getItem(key) {
      return this[key]
    }.bind(window.localStorage),
  })
}
