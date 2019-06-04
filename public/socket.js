var socket = io.connect('10.70.0.54:3000');
var sender = document.getElementById("name");
var content = document.getElementById("content");
var form = document.getElementById("myForm")
var output = document.getElementById("messages")

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(content.value!="" && name.value!=""){
        socket.emit('chat',{
            message : content.value,
            name : sender.value
        })
        content.value=""
    }
})

socket.on('chat', function(data){
    console.log("test")
    output.innerHTML += '<li><p><strong>' + data.name + ': </strong>' + data.message + '</p> </li>';
});

