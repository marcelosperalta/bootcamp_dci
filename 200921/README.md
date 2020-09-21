# MERN app

MongoDB, Express, React and Node.js app  

## Install

```
npm init -y
```

```
npm i express 
```

```
npm i nodemon --save-dev
```

```
npm i concurrently
```

```
npx create-react-app client
```

### _create the ```.env``` file with the information below:_  

```
PORT=5000
DB_URL=mongodb://localhost:<port-number>/<database-name>
```

### _create the ```.gitignore``` file with the information below:_  

```
node_modules/
.env
```

### _directory structure:_  

```
Project
│   README.md
|   .gitignore
|   .env
│   package.json
|   package-lock.json
└───server
│   |  server.js 
│   │  app.js
|   └───models
|   └───controllers
└───client
    │   README.md
    │   package.json
    |   package-lock.json
    └─── public
    └───src
        └───main.scss
```

### _add the scripts below to the ```package.json``` file:_  

```
"scripts": {
    "start": "node server/server.js",
    "server": "nodemon server/server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently  \"npm run server\" \"npm run client\""
  }, 
```

### _add the item below to the ```package.json``` file:_  

```
 "proxy": "http://localhost:5000"
```

### _```package.json``` file status when you finish:_  

```
{
  "name": "mern-app",
  "version": "1.0.0",
  "description": "fullstack app",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/server.js",
    "server": "nodemon server/server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently  \"npm run server\" \"npm run client\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "concurrently": "^5.3.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mongoose": "^5.10.3",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.4"
  }
}
```

## Install based on ```package.json``` file

```
npm install
```

```
npx create-react-app client
```

## Run Client and Server at the same time

```
npm run dev
```

### Run Client on browser:

http://localhost:3000/  

### Run Server on browser:

http://localhost:5000/  