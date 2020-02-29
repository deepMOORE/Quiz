## Installation.
### 1. Install dependencies.
- The project is provided as a set of Node.js packages.
```
npm i
```
### 2. Build.
- Build the sass:
```
npm run build:css
```
- The project base on webpack assembly, so build it:
```
npm run build:js
```
### 3. Run environment.
The project has separated servers that should run in two different terminals.  
- Api server is provided as a fake json server, that handle CRUD operations quite well.
```
npm run db
```
- You can use already install lite-server for pretty frontend experience.
```
npm run lite-server
```
##  NPM command's features.
- You can use `--watch` mods for develop. `dev:css` for watching sass files and `dev` for webpack.
```
npm run dev:css
npm run dev  
``` 
- If you ready for production, run `prod` for webpack build production code. 
```
npm run prod
```

