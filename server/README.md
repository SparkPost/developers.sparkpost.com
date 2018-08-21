# SparkPost Developer Site Server

Server that powers the email demo on the [SparkPost Developer Site](https://developers.sparkpost.com).
It's built with [Express](https://expressjs.com/) and uses [Socket IO](https://socket.io/) to communicate with the developer site.

## Development Set Up

### API
TODO: Standardize account credentials for SparkPost devs and provide an alternative to set up with other accounts.

### Starting
From `/develpers.sparkpost.com/server/`:

```
npm install
npm start
```

The server runs using [nodemon](https://github.com/remy/nodemon), so it restarts everytime a change is saved.

### Tunneling
I listens on port `localhost` port `8100`.
The developer site connects to the server locally, but you will need to surface the port through a tunnel in order to recieve webhook batches.

TODO: Standardize tunnel process

### Webhooks

The server accepts `POST` request to `/demo`.


### Tests

TODO: Write tests
