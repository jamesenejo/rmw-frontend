module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
      "browser": true
  },
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "one-var": 0,
    "one-var-declaration-per-line": 0,
		"new-cap": 0,
		"no-tabs": 1,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "comma-dangle": 0,
    "curly": ["error", "multi-line"],
    "import/no-unresolved": [2, { "commonjs": true }]
  },
  "settings":{
   "import/resolver": "webpack"
  }
};
