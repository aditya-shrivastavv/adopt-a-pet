# Setups for Different Tools -

## Development Dependencies

### 🟢 Prettier

1. Install Prettier

   ```bash
   npm i -D prettier
   # i -> install, D -> --save-dev save as dev dependency
   ```

2. Create a config file `.prettierrc` in the root directory

   ```json
   {} // empty object for defualt settings.
   ```

3. Make Sure some things -

   1. `format on save` option should be enabled inside vscode for prettier to work.
   2. make sure that in settings the defualt code formatter is set to prettier.
   3. download the prettier extension for vscode.
   4. `Prettier: Require Config` should be enabled so that prettier works on the projects in which prettier config file is present.

4. add new command in the `package.json` file under < scripts > tag

   ```json
   "scripts": {
    "prettier": "prettier --write \"src**/*.{js,jsx,ts,tsx,css,md}\""
   },
   ```

### 🟢 ESLint

1. Install ESLint

   ```bash
   # solo eslint
   npm i -D eslint

   # eslint with prettier
   npm i -D eslint eslint-config-prettier
   ```

2. make new file `.eslintrc.json` in the root directory

   ```json
   {
     "extends": ["eslint:recommended", "prettier"],
     "plugins": [],
     "parserOptions": {
       "ecmaVersion": 2022,
       "sourceType": "module",
       "ecmaFeatures": {
         "jsx": true
       }
     },
     "env": {
       "es6": true,
       "browser": true,
       "node": true
     }
   }
   ```

   inside extends array the prettier should always be the last one so that it can override the rules of other.

3. add this command in the `package.json` file under < scripts > tag

   ```json
   "scripts": {
    "eslint": "eslint \"src**/*.{js,jsx,ts,tsx}\" --quiet"
   },
   ```

4. make sure the following things -

   1. the eslint extension is installed in vscode.

5. additional tips -
   1. `npm run lint -- --debug` to debug the eslint to a extent.
   2. `npm run lint -- --fix` to fix the errors automatically to a extent.

### 🟢 .gitignore

the following files should be added to the `.gitignore` file -

```gitignore
node_modules/
dist/
.env
.DS_Store
coverage/
.vscode/
```

### + Vite

1. Install Vite

   ```bash
   npm i -D vite @vitejs/plugin-react
   ```

2. make a new file `vite.config.js` in the root directory

   ```js
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";

   export default defineConfig({
     plugins: [react()],
     root: "src", // location of index.html
   });
   ```

3. points to remember -
   1. `vite` only recognizes `jsx` files and not `js` files. there are many reasons why this happens but, just remember that when working with `vite` use `jsx` files.
   2. vite is used to build or package the project.

### 🟢 Configuring ESLint with React

1. Install the following packages -

   ```bash
   npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
   ```

## Production Dependencies

### 🟢 React

1. Install React

   ```bash
   npm i react react-dom
   ```

2. Done.
