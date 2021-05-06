# Installation
```
yarn add @yrlish/eslint-config
```

## Requirements
### TypeScript
```
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### React
In addition to above
````
yarn add eslint-plugin-react
````

# Configuration

## TypeScript
```json
{
  "extends": "@yrlish/eslint-config/typescript",
  "parser": "@typescript-eslint/parser"
}
```

## React with TypeScript
```json
{
  "extends": "@yrlish/eslint-config/react",
  "parser": "@typescript-eslint/parser"
}
```
