# Setups for Different Tools -

## Prettier

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
