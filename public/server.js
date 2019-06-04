
//Créer le serveur socket.io en utilisant le serveur http servit par express

//créer l'app express
var express = require('express')
var app = express();
app.use(express.static('public'));
//créer le serveur http avec l'app
var http = require('http').Server(app);
//créer leserveur socket.io avec le serveur http
var io = require('socket.io')(http);


//Set la route principale du site comme "/"
// app.get('/', function(req, res){
//   res.sendFile("localhost" );
// });

io.on('connection', function(socket){
  console.log('a user connected with id : ' + socket.id);
  socket.on('chat', (data)=>{
    console.log(data)
    io.sockets.emit('chat',data)
  })
});


//Spécifie le port du serveur comme 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});