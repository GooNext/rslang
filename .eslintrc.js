module.exports = {
    extends: ["airbnb", "react-app"],
    plugins: ["react", "import", "jsx-a11y", "flowtype", "react-hooks"],
    parser: "babel-eslint",
    rules: {
        "linebreak-style": 0,
        "global-require": 0,
        "eslint linebreak-style": [0, "error", "windows"],
        "no-unresolved": 0,
        "quote-props": [2, "consistent"],
        "comma-dangle": ["error", "always-multiline"],
        "no-use-before-define": ["error", { functions: false, classes: false }],
        "prefer-destructuring": [
            "warn",
            {
                array: true,
                object: true
            },
            {
                enforceForRenamedProperties: false
            }
        ],
        indent: [2, 2, { SwitchCase: 1 }],
        "max-len": ["error", 80],
        "no-debugger": "error",
        "no-console": "warn",
        camelcase: ["error", { properties: "never" }],
        "no-multi-spaces": "error",
        "prefer-const": "warn",
        "no-multiple-empty-lines": ["error", { max: 1 }],
        "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
        "jsx-quotes": ["error", "prefer-double"],
        "react/prefer-stateless-function": "warn",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-named-as-default": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/forbid-prop-types": "off",
        "react/jsx-curly-spacing": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-indent": "off",
        "react/jsx-no-bind": "off",
        "react/jsx-no-target-blank": "off",
        "react/no-array-index-key": "off",
        "react/no-string-refs": "warn",
        "react/no-unused-prop-types": "warn",
        "react/sort-comp": "off",
        "react/require-default-props": "warn"
    }
};
