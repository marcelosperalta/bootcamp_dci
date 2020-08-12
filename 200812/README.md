# Database

## SQL

https://en.wikipedia.org/wiki/SQL

### PostgreSQL

https://www.postgresql.org/

## NoSQL

https://en.wikipedia.org/wiki/NoSQL

### MongoDB

https://www.mongodb.com/

## NoSQL vs SQL Databases

https://www.mongodb.com/nosql-explained/nosql-vs-sql

### Installation on Linux

[Install MongoDB Community Edition on Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)

[Install MongoDB Community Edition on Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

**check**

```
ps --no-headers -o comm 1
```

e.g.
_result:_ systemd

![screenshot1](./readme/screenshot1.png)

**run**

1. start

```
sudo systemctl start mongod
```

2. verify

```
sudo systemctl status mongod
```

![screenshot2](./readme/screenshot2.png)

3. stop

```
sudo systemctl stop mongod
```

![screenshot3](./readme/screenshot3.png)

4. stop

```
sudo systemctl restart mongod
```

5. stop

```
mongo
```

6. documentation:

mongo
https://docs.mongodb.com/manual/reference/program/mongo/#bin.mongo

The mongo Shel
https://docs.mongodb.com/manual/mongo/

Getting Started
https://docs.mongodb.com/manual/tutorial/getting-started/#getting-started

### Installation on Windows

[Install MongoDB Community Edition on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)