module.exports = {
    env: {
        es2022: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    plugins: [
        "@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    rules: {
        "@typescript-eslint/brace-style": ["warn", "1tbs", {"allowSingleLine": true}],
        "@typescript-eslint/comma-dangle": ["warn", "always-multiline"],
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/indent": ["warn", 2, {"SwitchCase": 1}],
        "@typescript-eslint/member-delimiter-style": ["warn", {"multiline": {"delimiter": "none"}, "singleline": {"delimiter": "semi", "requireLast": false}, "multilineDetection": "brackets"}],
        "@typescript-eslint/naming-convention": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/promise-function-async": "warn",
        "@typescript-eslint/quotes": ["warn", "double"],
        "@typescript-eslint/semi": ["warn", "never"],
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "array-bracket-spacing": ["warn", "always"],
        "brace-style": "off",
        "comma-dangle": "off",
        "eol-last": ["warn", "always"],
        "eqeqeq": ["error", "always"],
        "indent": "off",
        "linebreak-style": "off",
        "max-len": ["warn", {"code": 120}],
        "no-console": "error",
        "no-empty": "warn",
        "no-multiple-empty-lines": "warn",
        "no-trailing-spaces": "error",
        "no-var": "error",
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["warn", "always"],
        "prefer-const": "warn",
        "quotes": "off",
        "require-jsdoc": "off",
        "semi": "off",
    }
};
