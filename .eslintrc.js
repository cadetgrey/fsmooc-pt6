module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
		"ecmaVersioN": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", "jest"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
		"no-trailing-spaces": "error",
		"react/prop-types": 0
    }
};
