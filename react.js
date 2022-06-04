module.exports = {
    extends: [
        "./typescript.js",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime"
    ],
    plugins: [
        "react"
    ],
    rules: {
        "jsx-quotes": ["warn", "prefer-double"],
    }
};
