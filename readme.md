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

# For more than One single SPA page:

```yarn
yarn add react-router-dom
```

## Then configure Routes.tsx in src like this:

```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SomePage } from './components/SomePage';
import { OtherPage } from './components/OtherPage';
import { Main } from './components/Main';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/somepage" element={<SomePage />} />
        <Route path="/otherpage" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}
```

### E pra funcionar com o typescript se o eslint chiar:

```yarn
yarn add @types/react-router-dom -D
```
