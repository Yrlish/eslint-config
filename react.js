module.exports = {
    extends: [
        "./typescript.js",
        "plugin:react/recommended"
    ],
    plugins: [
        "react"
    ],
    rules: [
        "jsx-quotes": ["warn", "prefer-double"],
    ]
};
