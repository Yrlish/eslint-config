module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-explicit-any": ["off"],
        "comma-dangle": ["warn", "always-multiline"],
        "eol-last": ["warn", "always"],
        "no-empty": "warn",
        "no-trailing-spaces": ["warn"],
        "no-var": ["warn"],
        "prefer-const": ["warn"],
        "quotes": ["warn", "double"],
        "semi": ["warn", "never"],
        "eqeqeq": ["error", "smart"]
    }
};
