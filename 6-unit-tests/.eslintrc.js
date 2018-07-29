module.exports = {
    "extends": ["google"],
    "parserOptions": {
        "ecmaVersion": 6,
    },
    "rules": {
        "max-len": [2, 120, 4],
        "new-cap": ["error", { "capIsNew": false }],
        "indent": ["error", 4],
        "comma-dangle": ["error", "never"],
        'no-unused-vars': [2, {args: 'none'}],
        "space-infix-ops": "error",
        'no-undef': ['error', { "typeof": false }],
        "brace-style": ["error", "stroustrup"]
    },
    "env": {
        "node": true
    }

};