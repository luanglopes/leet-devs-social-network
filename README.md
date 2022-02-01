# leet-devs-social-network
Social network that delete posts if it does not receive likes.

# Setup development server

First install dependencies:

```
npm i
```

Then run:

```
npm run dev
```

It will start the development server with suto-restarting.

> P.S.: That way you need to setup the database by your own, so make sure you did it before staring the server.

## Setup with docker

Install the dependencies with the command on previous section. Then run:

```
npm run dev:docker
```

It will start the database and the development server with auto-restarting inside a docker container.
