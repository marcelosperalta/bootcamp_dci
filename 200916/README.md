# Deploy

Software deployment is all of the activities that make a software system available for use.  

## [Vercel](https://vercel.com/)

Vercel is the a place to deploy any frontend app. Start by deploying with zero configuration to our global edge network. Scale dynamically to millions of pages without breaking a sweat.  

## [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

MongoDB Atlas is the global cloud database service for modern applications. Deploy fully managed MongoDB across AWS, Azure, or GCP. Best-in-class automation and proven practices guarantee availability, scalability, and compliance with the most demanding data security and privacy standards.  

## How to deploy [Node.js](https://nodejs.org/en/) apps using [Vercel](https://vercel.com/)

:dvd: install [vercel](https://www.npmjs.com/package/vercel):

```
npm install -g vercel
```

:page_facing_up: adding to ```vercel.json``` file:

```
{
    "version": 2,
    "builds": [{ "src": "index.js", "use": "@now/node-server" }],
}
```