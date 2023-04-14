# Start App:

### Scripts para início do projeto

```yarn
yarn create vite my-app --template react-ts
```

```yarn
cd my-app
```

```yarn
yarn
```

```yarn
yarn dev 
```

## Go run and happy!  


# Scripts configure eslint: 

#### YARN
##### - yarn add -D eslint prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser

#### NPM
##### - npm install eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

### After all add the following script to package.json:

```json
"scripts": {
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
}
```
