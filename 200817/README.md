# MongoDB

## run (Windows 10)

Run MongoDB Community Edition from the Command Interpreter<br><br>

:rotating_light:  **IMPORTANT**  :rotating_light:

_You must open the command interpreter as an Administrator._

<br>

**Start your database**

```
cd C:\Program Files\MongoDB\Server\4.4\bin\
```

```
mongod.exe --dbpath="c:\data\db"
```

If the MongoDB database server is running correctly, the Command Interpreter displays:  

**[initandlisten] waiting for connections**  

![screenshot1](./readme/screenshot01.png)

![screenshot2](./readme/screenshot02.png)
<br><br>

**Connect to MongoDB**

To connect a mongo.exe shell to the MongoDB instance, open another Command Interpreter with :warning: Administrative privileges :warning: and run:

````
"C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"
````

![screenshot3](./readme/screenshot03.png)
<br>

**Create a empty Database using MongoDB Compass Community**

![screenshot4](./readme/screenshot04.png)

![screenshot5](./readme/screenshot05.png)


# Connection with MongoDB using JavaScript, Node.js, Express, Mongoose and Dotenv

#### Installing the project based on existing ```package.json```

```
npm install
```
or  

:dvd: Create a new ```package.json```

```
git init -y
```

:dvd: Install [express](https://www.npmjs.com/package/express)

```
npm i express
```

:dvd: Install [mongoose](https://www.npmjs.com/package/mongoose)

```
npm i mongoose
```

:dvd: Install [nodemon](https://www.npmjs.com/package/nodemon)

```
npm i nodemon
```

:dvd: Install [morgan](https://www.npmjs.com/package/morgan)

```
npm i morgan
```

:dvd: Install [dotenv](https://www.npmjs.com/package/dotenv)

```
npm i dotenv
```

:page_facing_up: Create an ```.env``` file and add the lines below

```
PORT=3000
DB_URL=mongodb://localhost:27017/employees
```

<div align="center">:rotating_light: :rotating_light: :rotating_light: :rotating_light: :rotating_light:</div>
<div align="center">The <code>.env</code> was not added to the <code>.gitignore</code> because this is a repository for study.<br>
In a company envirorment, never push this type of file to a repository like GitHub (or any other version control system).<br>:link: See <a href="https://12factor.net/config" name="The Twelve-Factor"></div>
<div align="center">:rotating_light: :rotating_light: :rotating_light: :rotating_light: :rotating_light:</div>

:page_facing_up: Create an ```.gitignore``` file and add the line below

```
node_modules
```

:page_facing_up: Create an [app.js](https://github.com/marcelosperalta/dci/blob/master/200817/app.js) and [server.js](https://github.com/marcelosperalta/dci/blob/master/200817/server.js) files and copy de code form this repository.

:runner: run the project

````
npm start
````


