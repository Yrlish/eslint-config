module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "array-bracket-spacing": ["warn", "always"],
        "comma-dangle": ["warn", "always-multiline"],
        "eol-last": ["warn", "always"],
        "eqeqeq": ["error", "smart"],
        "indent": ["warn", 2],
        "jsx-quotes": ["warn", "prefer-double"],
        "linebreak-style": "off",
        "max-len": ["warn", { "code": 120 } ],
        "no-console": "error",
        "no-empty": "warn",
        "no-multiple-empty-lines": "warn",
        "no-trailing-spaces": "error",
        "no-var": "error",
        "object-curly-spacing": ["warn", "always"],
        "prefer-const": "warn",
        "quotes": ["warn", "double"],
        "require-jsdoc": "off",
        "semi": ["warn", "never"]
    }
};
