const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const socket = require('socket.io');
const SparkPost = require('sparkpost');

const sp = new SparkPost(process.env.SP_API_KEY);
const app = express();

app.use(bodyParser.json());

const server = app.listen(8100, () => {
  console.log('SparkPost Developer Server - listening on port 8100')
});

const io = socket(server);

// Demo connections
io.on('connect', (socket) => {
  console.log('New socket: ', socket.id);
  console.log(`Now connected to ${Object.keys(io.sockets.sockets).length} sockets`);


  socket.on('disconnect', (data) => {
    console.log('Socket disconnected: ', data);
    console.log(`Now connected to ${Object.keys(io.sockets.sockets).length} sockets`);
  });

  // Demo starting, sends email
  socket.on('startDemo', ({ email }) => {

    console.log(`Starting demo for ${socket.id}`);

    sp.transmissions.send({
      content: {
        template_id: 'demo-template'
      },
      recipients: [
        {
          name: 'Email Developer',
          address: email
        }
      ],
      metadata: {
        socketId: socket.id
      }
    })
    .then((data) => {
      console.log(`Demo email sent to ${email}`);

      // Let the client know the email sent
      socket.emit('accepted');
    })
    .catch((err) => {
      console.log('Error sending email: ', err);

      // Let the client know there was an error
      socket.emit('demoError', err);
    });

  });
});

// Webhook consumer
app.post('/demo', (req, res) => {
  res.sendStatus(200);

  if (Array.isArray(req.body) && req.body.length) {
    req.body.map(({ msys }) => {
      const category = Object.keys(msys)[0];
      const socketId = msys[category].rcpt_meta.socketId;

      console.log(`${category} event for: ${socketId}`);

      if (socketId) {
        io.to(socketId).emit('demoEvent',
          {
            ...msys[`${category}`]
          });
      }
    });
  }

});
